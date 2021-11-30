# express-typescript-template

## A Nodejs server template using

### Stack
* [ExpressJS](https://expressjs.com/)
* [TypeScript](https://www.typescriptlang.org/)
* [PM2](https://pm2.io/) - processs manager for running in production

### Tools
* [yarn](https://yarnpkg.com/)
* [dotenv](https://github.com/motdotla/dotenv)
    * note: .env is loaded in yarn scripts
* [prettier](https://prettier.io/)
* [eslint](https://eslint.org/)
    * Uses [eslint-plugin-unicord](https://github.com/sindresorhus/eslint-plugin-unicorn)
* [tsyringe](https://github.com/microsoft/tsyringe) - Lightweight dependency injection container

## Getting Started 
* Click "Use this template" on github
* Clone the repo that was created
* Update the repository and author fields in `package.json`
* Install dependencies `yarn install`
* Start the server in development mode `yarn dev`
* Start the server in production mode `yarn start`
* Stop the server running in production mode `yarn stop`

### Notes
* CommonJS module
* Currently has a bug where starting in development mode will try to start the server before the files have been compiled (due to running tsc and nodemon in watch mode at the same time). It should then compile correctly.