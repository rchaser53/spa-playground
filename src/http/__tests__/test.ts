import axios from 'axios'
import MockAdapter from 'axios-mock-adapter'

const mock = new MockAdapter(axios);

mock.onGet('/hoge').reply(500, {});

const createHoge = (client) => {
  return (url) => {
    return client.get('/hoge')
                .catch((err) => {
                  throw new Error('err')
                })
  }
}


const _axios = axios.create();
const hoge = createHoge(_axios)

test('nyan', async () => {
  try {
    await hoge('aa')
  } catch (err) {
    expect(err).toEqual(new Error('err'));
  }
})
