module.exports = (rawList = process.env.IP_WHITE_LIST || '') => {
  return rawList.split(' ');
};
