# Website

The Rancher Docs website is built with [Docusaurus 2](https://docusaurus.io/), a modern static website generator.

## Installation

The Rancher Docs repository already contains a yarn.lock file, which contains the dependencies you need to build the website.

1. If you haven't already, install [Node](https://nodejs.org/en/download/) and [Yarn](https://yarnpkg.com/getting-started/install).
1. Fork and clone the rancher-docs repository.
1. Go into your local rancher-docs folder.
1. Run `yarn` to install Docusaurus and associated dependencies.

## Local Development

```
yarn start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

You can also use Docker to launch the website without needing to install and configure Yarn:

```
docker run --rm -it -v $PWD:$PWD -w $PWD -p 3000:3000 node yarn start -h 0.0.0.0
```

## Build

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