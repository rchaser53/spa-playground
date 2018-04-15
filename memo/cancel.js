const axios = require('axios')

const CancelToken = axios.CancelToken;
const source = CancelToken.source()

const uri = 'http://localhost:3000/test'
// const uri = 'http://localhost:3000/a'

axios.get(uri, {
    cancelToken: source.token
  })
  .then((ret) => {
    console.log(ret.data)
  })
  .catch((err) => {
    if (axios.isCancel(err)) {
      console.log('Request canceled', err.message);
    } else {
      const {
        data, status, statusText, headers
      } = err.response
      console.error(status, statusText)
    }
  });

setTimeout(() => {
  source.cancel('Operation canceled by the user.')

  axios.post(uri, {
    name: 'new name'
  }, {
    cancelToken: source.token
  })
  .then((ret) => {
    console.log(ret)
  })
  .catch((err) => {
    if (axios.isCancel(err)) {
      console.log('Request canceled', err.message);
    } else {
      const {
        data, status, statusText, headers
      } = err.response
      console.error(status, statusText)
    }
  });
}, 100)
