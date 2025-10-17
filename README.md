# Contribute to Rancher Docs

Welcome to the [Rancher docs](https://ranchermanager.docs.rancher.com/) repository. See the [Rancher software](https://github.com/rancher/rancher) repository if you have questions or requests for the Rancher platform.

## Make a Suggestion

You can suggest changes to the Rancher docs in two ways: 

1. [Open an issue](https://github.com/rancher/rancher-docs/issues/new/choose).
1. Edit the docs in the way you see fit and open a pull request.

## Edit the Docs

To get started, [fork](https://github.com/rancher/rancher-docs/fork) and clone the rancher-docs repository.

Our repository doesn't allow you to make changes directly to the `main` branch. Create a working branch and make pull requests from your fork to [rancher/rancher-docs](https://github.com/rancher/rancher-docs).

For most updates, you'll need to edit a file in the `/docs` directory, which represents the ["Latest"](https://ranchermanager.docs.rancher.com/) version of our published documentation. The "Latest" version is a mirror of the most recently released version of Rancher. As of July 2025, the most recently released version of Rancher is 2.12.

Whenever an update is made to `/docs`, you should apply the same change to the corresponding file in `/versioned_docs/version-2.9`. If a change only affects older versions, you don't need to mirror it to the `/docs` directory.

If a file is moved or renamed, you'll also need to edit the `sidebars.js` files for each affected version, as well as the list of redirects in `docusaurus.config.js`. See [Moving or Renaming Docs](./moving-or-renaming-docs.md).

### Navigate the Repo

The file paths in the repo correspond to the URLs for pages on the docs website. The docs for the latest version of Rancher are located in `/docs`. All images are in `/static/img` in the top level of the repo. Older docs are found within `/versioned_docs` and generally follow the same structure as the files in `/docs`.

### Style & Formatting

The docs are written in [Markdown](https://www.markdownguide.org/getting-started/). We use standard American English and many pages are also available in Simplified Chinese.

Moving forward, we are referring to the SUSE [style guide](https://documentation.suse.com/style/current/pdf/style-guide_en.pdf). The **Style check / runner / vale (pull_request)** check used [Vale](https://vale.sh/) to make style and grammar suggestions for new or updated documentation based on the SUSE style guide. To review these suggestions when working on a PR:

1. Select the details of the **Style check / runner / vale (pull_request)** check.
1. In the logs, go to **Run errata-ai/vale-action@v2.1.0** and select **Running vale with reviewdog 🐶 ...** to view the suggestions.
1. New or updated files are checked against the SUSE style guide. Suggestions have the following format: '{"message": "[suse-vale-styleguide.Rule] Rule description", "location": {"path": "file-path", "range": {"start": {"line": , "column": }}}, "severity": " "}'

    For example: '{"message": "[suse-vale-styleguide.Usage] Use 'certain' instead of 'some'", "location": {"path": "docs/contribute-to-rancher.md", "range": {"start": {"line": 3, "column": 132}}}, "severity": "WARNING"}'

1. Incorporate the suggestions when possible and appropriate.

Every docs page contain metadata in the first few lines:

```
---
title: Some Title
---
```

The `title` is rendered as the page's headline. The site renderer wraps the `title` value in `H1` tags, which are equivalent to `#` in Markdown syntax. This means that all subsequent headers on the page should be second level (`##`) or more.

## Run the Docs Website

The Rancher Docs website is built with [Docusaurus 2](https://docusaurus.io/), a modern static website generator.

You can run the site on your local machine, to preview how pages on your working branch will look live.

First, install Docusaurus 2:

1. If you haven't already, install [Node](https://nodejs.org/en/download/) and [Yarn](https://yarnpkg.com/getting-started/install).
1. Go into your local rancher-docs folder.
1. The Rancher Docs repository already contains a yarn.lock file, which contains the dependencies you need to build the website. Run `yarn` to install Docusaurus and associated dependencies.

### Start Site

```
yarn start
```

This command starts a local development server for Docusaurus 2, and opens up a browser window. Most changes are reflected live without having to restart the server.

**Note:** The `yarn start` command won't include some important static site features. For example, switching between languages from the site's dropdown menu is not available. If you need these features, use `yarn build`.

### Build Site

```
yarn build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

### Launch With Docker

You can also use [Docker](https://www.docker.com/) to launch the website.

The below command can be used to install the dependencies and run the site inside a container:

```
docker run --rm -it -v $PWD:$PWD -w $PWD -p 3000:3000 node:18 /bin/sh -c "yarn install && yarn start -h 0.0.0.0"
```

Subsequent executions will check for updated dependencies, if there are none, it will skip the updates and quickly start the server.

License
=======
Copyright (c) 2014-2025 [SUSE, LLC.](https://www.suse.com/)

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

[http://www.apache.org/licenses/LICENSE-2.0](http://www.apache.org/licenses/LICENSE-2.0)

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
