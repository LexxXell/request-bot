module.exports = (rawList = process.env.ORIGIN_WHITE_LIST || '') => {
  return rawList.split(' ');
};
