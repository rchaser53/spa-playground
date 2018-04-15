const axios = require('axios')

const errorHandling = (err) => {
  if (axios.isCancel(err)) {
    console.log('Request canceled', err.message);
  } else {
    const {
      data, status, statusText, headers, config
    } = err.response
    console.error('response', status, statusText, headers)
    console.error('request', err.config)
  }
}

module.exports = {
  errorHandling
}