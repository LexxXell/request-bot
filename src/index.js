require('dotenv').config();
const express = require('express');
const cors = require('cors');
const {
  sendTgChatMessage,
  processingMessage,
  logger,
} = require('./helpers');
const { ipGuard, originGuard } = require('./guards');
const { httpCode } = require('./enum');

const app = express();

app.use(cors());
app.use(express.json());

if (Number(process.env.USE_IP_GUARD)) {
  app.use(ipGuard);
}
if (Number(process.env.USE_ORIGIN_GUARD)) {
  app.use(originGuard);
}

app.post('/', (request, response) => {
  try {
    sendTgChatMessage(processingMessage(request.body));
    response.status(httpCode.OK);
    response.json({ status: httpCode.OK });
  } catch (error) {
    logger(error);
    response.status(httpCode.INTERNAL_SERVER_ERROR);
    response.json({ status: httpCode.INTERNAL_SERVER_ERROR });
  }
});


app.listen(process.env.PORT || 3000);
