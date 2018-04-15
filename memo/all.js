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

const getSomethingLate = (innerUri, cancelToken) => {
  return new Promise((resolve, reject) => {
    setTimeout(async () => {
      try {
        const ret = await axios.get(innerUri, {
          cancelToken
        })
        resolve(ret);
      } catch (err) {
        reject(err)
      } 
    }, 1000);
  })
}

Promise.all([
  getSomething(uri),
  getSomethingLate(uri),
  getSomethingLate(uri),
])
.then((ret) => {
  ret.forEach((inner) => {
    console.log(inner.data)
  })
})
.catch(errorHandling);