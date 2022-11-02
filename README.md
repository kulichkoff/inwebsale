# inwebsale

<div id="header" align="center">
    <img src="https://img.shields.io/badge/node-16.15.1-darkgreen" alt="node 16.15.1">
    <img src="https://img.shields.io/github/last-commit/kulichkoff/inwebsale" alt="last commit">
    <img src="https://img.shields.io/github/v/release/kulichkoff/inwebsale?include_prereleases" alt="last release">
</div>

### Description

Initially, when you go to the site, you can only see the landing page. The client can create his own
store. So, he can send a link to this store to his customers. Each store has events and chat, as
well as products.

## Applications

| App space | Nx app name     | Brief description                                  |
|-----------|-----------------|----------------------------------------------------|
| frontend  | frontend-admin  | Administrative panel of the store and a little CMS |
| frontend  | frontend-market | Pages of the store for customers                   |
| backend   | api-backend     | API                                                |

## Main commands

```shell
$ yarn # or yarn install to install dependencies

$ yarn start # to start the project

$ yarn start frontend-admin # to start a specific app - here: frontend-admin

$ yarn build [nx-app-name] # to build a project for release

$ yarn test [nx-app-name] # run tests
```

