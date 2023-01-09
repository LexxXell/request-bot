const { httpCode, replies } = require('../enum');
const { logger } = require('../helpers');

const ipWhiteList = require('../helpers').getIpWhiteList();

module.exports = (request, response, next) => {
  const ip = (request.headers['x-forwarded-for'] || request.socket.remoteAddress);

  if (!ipWhiteList.includes(ip)) {
    const result = {
      status: httpCode.FORBIDDEN,
      message: replies.FORBIDDEN,
    }
    logger({
      ...result,
      reason: `${replies.UNKNOWN_IP}${ip}`,
    });
    response.status(httpCode.FORBIDDEN);
    return response.json(result);
  }

  return next();
}