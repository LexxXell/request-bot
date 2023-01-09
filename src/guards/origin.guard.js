const { replies, httpCode } = require('../enum');
const { logger } = require('../helpers');

const originWhiteList = require('../helpers').getOriginWhiteList();

module.exports = (request, response, next) => {
  const origin = request.get('origin');

  if (!originWhiteList.includes(origin)) {
    const result = {
      status: httpCode.FORBIDDEN,
      message: replies.FORBIDDEN,
    }
    logger({
      ...result,
      reason: `${replies.UNKNOWN_ORIGIN}${origin}`,
    });
    response.status(httpCode.FORBIDDEN);
    return response.json(result);
  }

  return next();
}