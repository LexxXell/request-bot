# Request Bot
The bot is designed to redirect requests coming to the web server to the Telegram chat.

## Contents
- [Technologies](#Technologies)
- [Usage](#usage)
- [Deploy и CI/CD](#deploy-и-ci/cd)
- [Project Team](#project-team)

## Technologies
- [NodeJS](https://nodejs.org/)
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
'''
PORT - port on which the web interface will be hosted

BOT_TOKEN - bot token obtained from BotFather

CHAT_ID - id of the chat where the bot will send the message

USE_IP_GUARD - use IP guard 0=false, 1=true

IP_WHITE_LIST - IP addresses separated by spaces

USE_ORIGIN_GUARD - use IP origin 0=false, 1=true

ORIGIN_WHITE_LIST - Domain names (including http or https) separated by spaces
'''

Run the bot:
```sh
$ yarn dev
```
The bot accepts the post request to the port specified in the .env file, and redirects it to the chat specified in the .env file.

## Deploy и CI/CD
It is recommended to use pm2 to run the bot in production.
```sh
$ pm2 start src/index.js --name=<process_name>
```

## Project Team

- [LexxXell](https://t.me/lexxxell) — Back-End Engineer
- [Den Kravchu](https://denkravchu.com) — Front-end Blockchain developer, web 2d/3d animations developer
