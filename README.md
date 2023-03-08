# Edit The Docs

To get started, fork and clone the rancher-docs repository.

Our repository doesn't allow you to make changes directly to the `main` branch. Create a working branch and make pull requests from your fork to [rancher/rancher-docs](https://github.com/rancher/rancher-docs). 

## Style & Formatting

The docs are written in [Markdown](https://www.markdownguide.org/getting-started/). We refer to the Microsoft [style guide](https://learn.microsoft.com/en-us/style-guide/welcome/) and generally use standard American English. Many pages are also available in Simplified Chinese.

Every docs page contain metadata in the first few lines:

```
---
title: Some Title
---
```

The `title` is rendered as the page's headline. The site renderer wraps the `title` value in `H1` tags, which are equivalent to `#` in Markdown syntax. This means that all subsequent headers on the page should be second level (`##`) or more.

## Docs Website

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
docker run --rm -it -v $PWD:$PWD -w $PWD -p 3000:3000 node /bin/sh -c "yarn install && yarn start -h 0.0.0.0"
```

Subsequent executions will check for updated dependencies, if there are none, it will skip the updates and quickly start the server.

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
