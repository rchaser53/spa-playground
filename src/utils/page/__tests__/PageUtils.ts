import axios from 'axios'
import MockAdapter from 'axios-mock-adapter'

import  { createDecoratorObj } from '../PageUtils.vue'
const data = {
  articleEndpoint: '/testPath'
} 

describe('PageUtils for mixins', () => {
  test('mounted', async () => {
    const client = {
      get() {
        return new Promise((resolve) => {
          resolve({data: 'hoge'})
        })
      }
    }

    const fakeThis = {
      cancelSource: {
        cancel(key) {}
      },
      $once(key, func) {
        expect('error').toEqual(key)
      }
    }

    const decoratorObj = createDecoratorObj(client, data)
    await decoratorObj.mounted.call(fakeThis)
  })

  test('beforeDestroy', async () => {
    const errorObj = { error: 'hoge' }
    const client = {
      get() {
        return new Promise((_, reject) => {
          reject(errorObj)
        })
      }
    }

    const fakeThis = {
      cancelSource: {
        cancel(key) {
          expect(key).toEqual('nya-n')
        }
      },
      article: '',
      $emit: (key, object) => {
        expect(key).toEqual('error');
        expect(object).toEqual(errorObj);
      }
    }

    const decoratorObj = createDecoratorObj(client, data)
    await decoratorObj.beforeDestroy.call(fakeThis)
  })
})