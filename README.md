# Edit The Docs

To get started, fork and clone the rancher-docs repository.

Our repository doesn't allow you to make changes directly to the `main` branch. Create a working branch and make pull requests from your fork to [rancher/rancher-docs](https://github.com/rancher/rancher-docs). 

## Style & Formatting

The docs are written in [Markdown](https://www.markdownguide.org/cheat-sheet/). We refer to the Microsoft [style guide](https://learn.microsoft.com/en-us/style-guide/welcome/) and generally use standard American English. Many pages are also available in Standard Chinese. We plan to add more language support.

Every docs page contain metadata in the first few lines:

```
---
title: Some Title
---
```

The title metadata is rendered as the published page's headline. The renderer wraps the content of the `title` in H1 level HTML header tags, which are equivalent to `#` in Markdown syntax. This means that all subsequent headers on the page should be second level (`##`) or more.

## Organization

Folders and directories in the repo correspond to submenus in the site sidebar. We try to keep our submenus to a maximum of three levels deep, or four if absolutely necessary.

The sidebar on the live site is rendered based on the contents of the file `sidebar.json`, which is located in the top level of the repository. If you add, move, or delete a page, `sidebar.json` must be updated.

## Docs Website

The Rancher Docs website is built with [Docusaurus 2](https://docusaurus.io/), a modern static website generator.

You can run the site on your local machine, to preview how pages on your working branch will look live.

First, install Docusaurus 2:

1. If you haven't already, install [Node](https://nodejs.org/en/download/) and [Yarn](https://yarnpkg.com/getting-started/install).
1. Go into your local rancher-docs folder.
1. The Rancher Docs repository already contains a yarn.lock file, which contains the dependencies you need to build the website. Run `yarn` to install Docusaurus and associated dependencies.

### Launch With Docker

Use [Docker](https://www.docker.com/) to launch the website without needing to install and configure Yarn:

```
docker run --rm -it -v $PWD:$PWD -w $PWD -p 3000:3000 node yarn start -h 0.0.0.0
```

### Start

```
yarn start
```

This command starts a local development server for Docusuarus 2, and opens up a browser window. Most changes are reflected live without having to restart the server.

Note: The `yarn start` command won't include some important static site features. For example, the site will lack versioning for different languages. If you need these features, use `yarn build`.

### Build

```
yarn build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

License
=======
Copyright (c) 2014-2022 [Rancher Labs, Inc.](https://rancher.com)

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

[http://www.apache.org/licenses/LICENSE-2.0](http://www.apache.org/licenses/LICENSE-2.0)

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.