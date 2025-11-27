#!/bin/bash

# backport_docs.sh
#
# A script to backport changes (added, modified, and removed files)
# from 'docs/' and 'sidebars.js' to their versioned counterparts.

# --- Configuration ---
DOCS_DIR="docs"
VERSIONED_DIR="versioned_docs"
SIDEBARS_SOURCE_FILE="sidebars.js"
SIDEBARS_VERSIONED_DIR="versioned_sidebars"

# --- Colors ---
GREEN="\033[0;32m"
RED="\033[0;31m"
YELLOW="\033[0;33m"
BLUE="\033[0;34m"
RESET="\033[0m"

# --- Help Message ---
usage() {
    echo -e "${GREEN}Usage:${RESET} $0 [version1] [version2] ..."
    echo
    echo -e "${YELLOW}Description:${RESET}"
    echo "  Backports changes (added, modified, removed) from the '$DOCS_DIR/' directory"
    echo "  and modifications from '$SIDEBARS_SOURCE_FILE' to specified versioned directories."
    echo
    echo -e "${YELLOW}Arguments:${RESET}"
    echo "  [version]   (Optional) One or more specific versions to backport to."
    echo "              If no versions are provided, the script attempts to backport"
    echo "              to all valid versions found in '$VERSIONED_DIR/'."
    echo
    echo -e "${YELLOW}Options:${RESET}"
    echo "  -h, --help  Show this help message."
    echo
    echo -e "${YELLOW}Example (all versions):${RESET}"
    echo "  $0"
    echo
    echo -e "${YELLOW}Example (specific versions):${RESET}"
    echo "  $0 version-2.12 version-2.13"
}

# --- Argument Parsing ---
if [[ "$1" == "-h" || "$1" == "--help" ]]; then
    usage
    exit 0
fi

TARGET_VERSIONS=("$@")

# --- Sanity Checks ---
if [ ! -d "$DOCS_DIR" ]; then
    echo -e "${RED}Error:${RESET} Directory '$DOCS_DIR' not found."
    echo "Please run this script from the repository root."
    exit 1
fi

if [ ! -d "$VERSIONED_DIR" ]; then
    echo -e "${RED}Error:${RESET} Directory '$VERSIONED_DIR' not found."
    echo "Please run this script from the repository root."
    exit 1
fi

if [ ! -f "$SIDEBARS_SOURCE_FILE" ]; then
    echo -e "${RED}Error:${RESET} Source file '$SIDEBARS_SOURCE_FILE' not found."
    echo "Please run this script from the repository root."
    exit 1
fi

if [ ! -d "$SIDEBARS_VERSIONED_DIR" ]; then
    echo -e "${RED}Error:${RESET} Directory '$SIDEBARS_VERSIONED_DIR' not found."
    echo "Please run this script from the repository root."
    exit 1
fi

# --- Validate Provided Versions ---
# This block only runs if arguments were passed
if [ ${#TARGET_VERSIONS[@]} -gt 0 ]; then
    echo -e "${BLUE}Validating provided versions...${RESET}"
    for version in "${TARGET_VERSIONS[@]}"; do
        # Fail if the argument looks like an option (starts with -)
        if [[ "$version" == -* ]]; then
            echo -e "${RED}Error:${RESET} Unknown option '$version'."
            echo "Use -h or --help for usage."
            exit 1
        fi
        
        if [ ! -d "$VERSIONED_DIR/$version" ]; then
            echo -e "${RED}Error:${RESET} Provided version '$version' is not a valid directory under '$VERSIONED_DIR/'."
            exit 1
        fi
    done
    echo -e "${GREEN}All provided versions are valid.${RESET}"
    echo # Newline
fi

# --- Find Target Versions (if not specified) ---
# This block only runs if NO arguments were passed
if [ ${#TARGET_VERSIONS[@]} -eq 0 ]; then
    echo -e "${BLUE}No versions specified. Detecting all valid versions in '$VERSIONED_DIR'...${RESET}"
    # Find all subdirectories
    for dir in "$VERSIONED_DIR"/*/; do
        # Check if the directory exists and is a directory
        if [ -d "$dir" ]; then
            # Check if the directory contains any file *other* than notice.md
            # We use -print -quit to stop find immediately after the first match
            if find "$dir" -type f -not -name "notice.md" -print -quit | grep -q .; then
                # It's a valid version, add its basename
                TARGET_VERSIONS+=("$(basename "$dir")")
            fi
        fi
    done
fi

if [ ${#TARGET_VERSIONS[@]} -eq 0 ]; then
    echo -e "${RED}Error:${RESET} No target versions found or specified."
    exit 1
fi

echo -e "${GREEN}Target versions:${RESET} ${TARGET_VERSIONS[*]}"
echo # Newline

# --- Find Files to Backport (Docs) ---
echo -e "${BLUE}Finding modified/new/removed files in '$DOCS_DIR'...${RESET}"
# Find staged (cached) and unstaged (HEAD) changes (Added, Modified, or Deleted)
FILES_TO_BACKPORT=$( (git diff --name-only --diff-filter=AMD HEAD -- "$DOCS_DIR"; \
                       git diff --name-only --diff-filter=AMD --cached -- "$DOCS_DIR") \
                       | sort -u)

if [ -z "$FILES_TO_BACKPORT" ]; then
    echo -e "${GREEN}No modified, new, or removed files found in '$DOCS_DIR'. Nothing to do.${RESET}"
else
    echo -e "${GREEN}Files to backport:${RESET}"
    echo -e "${FILES_TO_BACKPORT}"
    echo # Newline

    # --- Main Logic (Docs) ---
    echo -e "${BLUE}Starting backport process for docs...${RESET}"

    # Use 'read' to handle file paths
    echo "$FILES_TO_BACKPORT" | while IFS= read -r file; do
        if [ -z "$file" ]; then # Skip empty lines
            continue
        fi

        echo -e "${YELLOW}Processing file:${RESET} $file"

        # Get the relative path inside 'docs/'
        # e.g., 'docs/guides/intro.md' -> 'guides/intro.md'
        REL_PATH="${file#$DOCS_DIR/}"
        if [ "$REL_PATH" == "$file" ]; then
            echo -e "  ${RED}Error:${RESET} Could not determine relative path for '$file'. Skipping."
            continue
        fi

        # Check if the file exists in the source.
        # If it does, it's ADDED or MODIFIED.
        # If it doesn't, it's DELETED.
        if [ -f "$file" ]; then
            # --- LOGIC FOR ADDED/MODIFIED FILES ---
            
            PATCH_DATA_STAGED=$(git diff --cached -- "$file")
            PATCH_DATA_UNSTAGED=$(git diff -- "$file")

            # Loop through each target version
            for version in "${TARGET_VERSIONS[@]}"; do
                TARGET_FILE="$VERSIONED_DIR/$version/$REL_PATH"
                TARGET_DIR=$(dirname "$TARGET_FILE")

                # Check if the target *versioned file* exists
                if [ ! -f "$TARGET_FILE" ]; then
                    # File doesn't exist in the versioned directory.
                    # This is a NEW file. Copy it directly.
                    echo -e "  ${BLUE}Backporting as new file to version:${RESET} $version"
                    # Ensure target directory exists
                    mkdir -p "$TARGET_DIR"
                    if [ $? -ne 0 ]; then
                        echo -e "    ${RED}Error:${RESET} Could not create directory '$TARGET_DIR'. Skipping."
                        continue
                    fi
                    # Copy the new file
                    cp "$file" "$TARGET_FILE"
                    if [ $? -eq 0 ]; then
                        echo -e "    ${GREEN}Copied:${RESET} $file -> $TARGET_FILE"
                    else
                        echo -e "    ${RED}Error:${RESET} Failed to copy '$file' to '$TARGET_FILE'."
                    fi
                else
                    # File *does* exist. Patch it using the deltas.
                    echo -e "  ${BLUE}Backporting changes to version:${RESET} $version"
                    
                    patch_applied=false
                    patch_failed=false

                    if [ -n "$PATCH_DATA_STAGED" ]; then
                        echo "$PATCH_DATA_STAGED" | patch --no-backup "$TARGET_FILE" - > /dev/null 2>&1
                        if [ $? -eq 0 ]; then
                            echo -e "    ${GREEN}Patched (staged):${RESET} $TARGET_FILE"
                            patch_applied=true
                        else
                            echo -e "    ${RED}Error (staged):${RESET} Failed to patch '$TARGET_FILE'."
                            patch_failed=true
                        fi
                    fi

                    if [ -n "$PATCH_DATA_UNSTAGED" ]; then
                        echo "$PATCH_DATA_UNSTAGED" | patch --no-backup "$TARGET_FILE" - > /dev/null 2>&1
                        if [ $? -eq 0 ]; then
                            echo -e "    ${GREEN}Patched (unstaged):${RESET} $TARGET_FILE"
                            patch_applied=true
                        else
                            echo -e "    ${RED}Error (unstaged):${RESET} Failed to patch '$TARGET_FILE'."
                            patch_failed=true
                        fi
                    fi

                    if [ "$patch_failed" = true ]; then
                        echo -e "    ${YELLOW}Tip:${RESET} This file may have diverged. Please review manually."
                    elif [ "$patch_applied" = false ]; then
                        echo -e "    ${GREEN}Skipped:${RESET} $TARGET_FILE (already in sync)"
                    fi
                fi
            done # end version loop
        
        else
            # --- LOGIC FOR DELETED FILES ---
            echo -e "  ${BLUE}File was deleted. Propagating deletion...${RESET}"

            # Loop through each target version
            for version in "${TARGET_VERSIONS[@]}"; do
                TARGET_FILE="$VERSIONED_DIR/$version/$REL_PATH"
                
                if [ -f "$TARGET_FILE" ]; then
                    rm "$TARGET_FILE"
                    if [ $? -eq 0 ]; then
                        echo -e "    ${GREEN}Deleted:${RESET} $TARGET_FILE"
                    else
                        echo -e "    ${RED}Error:${RESET} Failed to delete '$TARGET_FILE'."
                    fi
                else
                    echo -e "    ${GREEN}Skipped:${RESET} $TARGET_FILE (already deleted)"
                fi
            done # end version loop
        fi # end add/modify/delete check

        echo # Add a newline for readability
    done # end file loop
fi

echo # Newline

# --- Main Logic (Sidebars) ---
echo -e "${BLUE}Checking for sidebars changes...${RESET}"

# Check for staged or unstaged MODIFICATIONS to the source sidebars file
# We only care about modifications (M), not additions or deletions.
SIDEBARS_CHANGED=$( (git diff --name-only --diff-filter=M HEAD -- "$SIDEBARS_SOURCE_FILE"; \
                     git diff --name-only --diff-filter=M --cached -- "$SIDEBARS_SOURCE_FILE") \
                     | sort -u)

if [ -z "$SIDEBARS_CHANGED" ]; then
    echo -e "${GREEN}No modifications found in '$SIDEBARS_SOURCE_FILE'. Skipping sidebars backport.${RESET}"
else
    echo -e "${YELLOW}Processing file:${RESET} $SIDEBARS_SOURCE_FILE"
    
    # Get the patch data for STAGED changes (vs. HEAD)
    PATCH_DATA_STAGED=$(git diff --cached -- "$SIDEBARS_SOURCE_FILE")
    # Get the patch data for UNSTAGED changes (vs. Index)
    PATCH_DATA_UNSTAGED=$(git diff -- "$SIDEBARS_SOURCE_FILE")

    for version in "${TARGET_VERSIONS[@]}"; do

        # The $version variable already contains "version-X.Y"
        TARGET_FILE="$SIDEBARS_VERSIONED_DIR/${version}-sidebars.json"

        # Check if the corresponding versioned sidebars file exists
        if [ ! -f "$TARGET_FILE" ]; then
            echo -e "  ${YELLOW}Skipped:${RESET} $TARGET_FILE (not found)"
            continue
        fi

        echo -e "  ${BLUE}Backporting changes to:${RESET} $TARGET_FILE"
        
        patch_applied=false
        patch_failed=false

        if [ -n "$PATCH_DATA_STAGED" ]; then
            echo "$PATCH_DATA_STAGED" | patch --no-backup "$TARGET_FILE" - > /dev/null 2>&1
            if [ $? -eq 0 ]; then
                echo -e "    ${GREEN}Patched (staged):${RESET} $TARGET_FILE"
                patch_applied=true
            else
                echo -e "    ${RED}Error (staged):${RESET} Failed to patch '$TARGET_FILE'."
                patch_failed=true
            fi
        fi

        if [ -n "$PATCH_DATA_UNSTAGED" ]; then
            echo "$PATCH_DATA_UNSTAGED" | patch --no-backup "$TARGET_FILE" - > /dev/null 2>&1
            if [ $? -eq 0 ]; then
                echo -e "    ${GREEN}Patched (unstaged):${RESET} $TARGET_FILE"
                patch_applied=true
            else
                echo -e "    ${RED}Error (unstaged):${RESET} Failed to patch '$TARGET_FILE'."
                patch_failed=true
            fi
        fi

        if [ "$patch_failed" = true ]; then
            echo -e "    ${YELLOW}Tip:${RESET} This file may have diverged. Please review manually."
        elif [ "$patch_applied" = false ]; then
            echo -e "    ${GREEN}Skipped:${RESET} $TARGET_FILE (already in sync)"
        fi
        echo # Add a newline
    done # end version loop
fi

echo # Newline
echo -e "${GREEN}Backport complete.${RESET}"
