const fetch = require('node-fetch');
const { replies } = require('../enum');

const RESULT_SUCCESS = 200;

const createUrl = (message, token, chatId) => {
  return `https://api.telegram.org/bot${token}/sendMessage?chat_id=${chatId}&parse_mode=html&text=${message}&disable_web_page_preview=true`
}

module.exports = (message = '', token = process.env.BOT_TOKEN || '', chatId = process.env.CHAT_ID || '') => {
  if (!message) throw new Error(replies.EMPTY_MESSAGE);
  if (!token || !chatId) throw new Error(replies.NO_TOKEN_OR_CHAT_ID);
  fetch(createUrl(message, token, chatId))
    .then(result => {
      if (result.status !== RESULT_SUCCESS) {
        throw new Error(replies.TELEGRAM_API_ERROR)
      };
    })
    .catch(error => {
      throw new Error(error);
    });
}