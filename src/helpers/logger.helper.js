const log = console.log;

console.log = function () {
  const first_parameter = arguments[0];
  const other_parameters = Array.prototype.slice.call(arguments, 1);

  function formatConsoleDate(date) {
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();
    const hour = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();
    const milliseconds = date.getMilliseconds();

    return '[' +
      year +
      '/' +
      ((month < 10) ? '0' + month : month) +
      '/' +
      ((day < 10) ? '0' + day : day) +
      '_' +
      ((hour < 10) ? '0' + hour : hour) +
      ':' +
      ((minutes < 10) ? '0' + minutes : minutes) +
      ':' +
      ((seconds < 10) ? '0' + seconds : seconds) +
      '.' +
      ('00' + milliseconds).slice(-3) +
      '] ';
  }

  log.apply(console, [formatConsoleDate(new Date()) + first_parameter].concat(other_parameters));
};

module.exports = (message) => console.log(JSON.stringify(message)); 