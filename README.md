# AWS CDK with Express Template

Simple template with AWS CDK and Express

## Feature

-   Partial installation using npm --prefix and --only
-   Enable import using the Babel
-   Setting up API testing locally

## Installation

```
// nodeJS modules install
npm run package-install
```

It is written as a **Windows-only** command.
If an error occurs, MAC/Linux user should modify scripts in **/package.json.**
Please modify **copy, delete, and conditional statement** below to **suit your operating system.**

```json
// /package.json
"package-install": "npm run remove-node_modules && npm run prod-package-install && npm i",
"remove-node_modules": "if exist .\\node_modules\\ rmdir .\\node_modules\\ /s /q",
"prod-package-install": "npm install --only=prod && xcopy node_modules dist\\node_modules /e /h /y",
```

## Run

```
// Offline API test
npm run express-offline
```

```
// Bootstrap
npm run bootstrap
```

```
// Deploy
npm run deploy
```

```
// Destroy
npm run destroy
```
