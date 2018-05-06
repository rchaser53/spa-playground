const { createUrl } = require('dumb-url-handler')
const Axios = require('axios')

const baseURL = 'http://localhost:3000/'
const axios = Axios.create()

const articleUrl = createUrl(baseURL, [ 'article' ])
const article2Url = createUrl(baseURL, [ 'article2' ])
const errorUrl = createUrl(baseURL, [ 'error' ])

axios.interceptors.response.use((response) => {
  return (response.config.url === articleUrl)
            ? Promise.resolve({ data: 'article' })
            : Promise.resolve({ data: 'article2' });
}, (error) => {
  return Promise.reject('error');
});

axios.get(articleUrl)
  .then((ret) => {
    console.log(ret)
  })

axios.get(article2Url)
  .then((ret) => {
    console.log(ret)
  })

axios.get(errorUrl)
  .catch((err) => {
    console.error(err)
  })