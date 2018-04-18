const axiosRetry = require('axios-retry');
const Axios = require('axios');

const CancelToken = Axios.CancelToken;
const client = Axios.create({
  baseURL: 'http://localhost:3000/',
})

client.interceptors.request.use((ret) => {
  console.log(ret.url)
  return ret
})

axiosRetry(client);
Promise.all([
  client.get('/count1', {
    'axios-retry': {
      retries: 3
    }
  }),
  client.get('/count2', {
    'axios-retry': {
      retries: 3
    }
  }),
]).then((ret) => {
  ret.forEach(inner => console.log(inner.data)) 
})
.catch(error => {
  console.log('nyan')
});
