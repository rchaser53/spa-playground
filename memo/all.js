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
  return axios.get(innerUri, options);
}

const getSomethingLate = (innerUri, options) => {
  return new Promise((resolve, reject) => {
    setTimeout(async () => {
      try {
        const ret = await axios.get(innerUri, options)
        resolve(ret);
      } catch (err) {
        reject(err)
      } 
    }, 1000);
  })
}

const options = {
  cancelToken: source.token,
  adapter(config) {
    return new Promise((resolve, reject) => {
      const endpoint = config.url.split('/').pop()

      const data = endpoint.includes('notFound')
                      ? { notFound: 'notFound' }
                      : { nyan: 'nya-n' }

      resolve({
        status: 200,
        data
      })
    })
  }
}

Promise.all([
  getSomething(uri, options),
  getSomethingLate(notFoundUri2, options),
  getSomethingLate(uri, options),
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
