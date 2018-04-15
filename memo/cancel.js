const axios = require('axios')
const { errorHandling } = require('./error')

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
  .catch(errorHandling);

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
  .catch(errorHandling);
}, 100)