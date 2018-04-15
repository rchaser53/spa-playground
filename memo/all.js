const Axios = require('axios')
const { errorHandling } = require('./error')

const CancelToken = Axios.CancelToken;
const axios = Axios.create({
  baseURL: 'http://localhost:3000/',
})

const source = CancelToken.source()

const uri = '/test'
const notFoundUri = '/notFound'
const notFoundUri2 = '/notFound2'
const getSomething = (innerUri, cancelToken) => {
  return axios.get(innerUri, {
    cancelToken
  });
}

Promise.all([
  getSomething(uri),
  getSomething(notFoundUri2),
  getSomething(notFoundUri),
])
.then((ret) => {
  console.log(ret)
})
.catch(errorHandling);