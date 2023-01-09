module.exports = (message = {}) => {



  return Object.keys(message).map(key => {
    if (typeof message[key] === 'object') {
      return `<b>${key}</b>: ${message[key].reduce((acc, val) => acc ? `${acc}, ${val}` : val, '')}`
    }
    return `<b>${key}</b>: ${message[key]}`
  }).reduce((acc, val) => acc ? `${acc}%0A${val}` : val, '')

}
