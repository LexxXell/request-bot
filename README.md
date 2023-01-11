# Request Bot
The bot is designed to redirect requests coming to the web server to the Telegram chat.

## Contents
- [Technologies](#Technologies)
- [Usage](#usage)
- [Deploy и CI/CD](#deploy-и-ci/cd)
- [Project Team](#project-team)

## Technologies
- [ExpressJS](https://expressjs.com/)
- [Cors](https://github.com/expressjs/cors#readme)
- [dotenv](https://github.com/motdotla/dotenv#readme)
- [node-fetch](https://github.com/node-fetch/node-fetch)
- [nodemon](https://nodemon.io/)
- [yarn](https://yarnpkg.com/)


## Usage

Register a new bot in Telegram using BotFather. Create a new channel or group, and using special bots (find in Telegram) find out the id of your chat or group. Add the bot to the administrators of your chat or group.

Set the dependencies with yarn:
```sh
$ yarn
```
Rename the .env.example file to .env and modify it to suit your needs.

Run the bot:
```sh
$ yarn dev
```

The bot accepts the post request to the port specified in the .env file, and redirects it to the chat specified in the .env file.

## Deploy и CI/CD
It is recommended to use pm2 to run the bot in production.


## Project Team

- [LexxXell](https://t.me/lexxxell) — Back-End Engineer
- [Den Kravchu](https://denkravchu.com) — Front-end Blockchain developer, web 2d/3d animations developer
