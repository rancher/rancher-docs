# Adding, Moving, or Renaming Docs

Docusaurus generates sidebars based on a JSON file named sidebars.js. When you add a new page, you need to add an entry to the sidebars.json file. When you move or rename a page, you need to update sidebars.js. If you a file or edit the file's name, you'll also need to add a redirect in docusaurus.config.json.

> **Note:** Avoid adding filenames that contain periods before the file extension (example: `rke2-self-assessment-guide-with-cis-v1.23-k8s-v1.25.md`). If necessary, use dashes instead of periods (`rke2-self-assessment-guide-with-cis-v1-23-k8s-v1-25.md`).

## Sidebars

The sidebars.js file for the latest version of Rancher is located in the top level of the repo. Versioned docs each have their own versioned sidebar, found within `/versioned_sidebars` in the top level of the repo.

The schema for sidebars.js looks like this: 

```JS
sidebar: [
    "toplevel",
    {
        type: "category",
        label: "second level",
        items: [
            "second-level/overview",
            {
                type: "category",
                label: "section",
                link: {
                    type: "doc",
                    id: "pages-for-subheaders/index-page-for-this-section"
                }
                items: [
                    "second-level/index-page-for-this-section/page-a",
                    "second-level/index-page-for-this-section/page-b",
                ]
            }
        ]
    }
]
```

Paths for docs files are listed within an `items` array. If the doc is as an index page, its entry in sidebars.json should have extra metadata, such as `category`, `link`, and `label`.

### Moving Index Pages

Some entries in the published sidebar are clickable dropdown menus. These menu entries are indicated by `type: category` in the sidebar file. When you select the entry on the published docs site, the menu opens and you will navigate to the page indicated in `link.id`. 

Docusaurus uses the `label` field to generate the text that appears on the dropdown menu in the sidebar. When you rename these index pages, you also need to update their `label` in the sidebar file.

### Redirecting Pages

When you move a page, update redirects in the `@docusaurus/plugin-client-redirects` field within the docusaurus.config.js file. This file is located in the top level of the repo.

The schema for docs redirects looks like this:

```JS
          {
            to: '/faq/general-faq',
            from: '/faq'
          }
          {
            to: '/v2.6/faq/general-faq',
            from: '/v2.6/faq'
          },
```

Docusaurus redirects don't accept wildcards, so each path must be exact. This means that you must add individual redirects for each version of a doc. 

Docusaurus also can't redirect pages whose filenames contain a period before the extension. You'll need to manually update any docset links to those pages. 
