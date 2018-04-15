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
const getSomething = (innerUri, source) => {
  return axios.get(innerUri, {
    cancelToken: source.token
  });
}

const getSomethingLate = (innerUri, source) => {
  return new Promise((resolve, reject) => {
    setTimeout(async () => {
      try {
        const ret = await axios.get(innerUri, {
          cancelToken: source.token
        })
        resolve(ret);
      } catch (err) {
        reject(err)
      } 
    }, 1000);
  })
}

Promise.all([
  getSomething(uri, source),
  getSomethingLate(uri, source),
  getSomethingLate(uri, source),
])
.then((ret) => {
  ret.forEach((inner) => {
    console.log(inner.data)
  })
})
.catch(errorHandling);

setTimeout((ret) => {
  source.cancel('nya-n')
// too late
}, 1500)
