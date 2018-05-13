import Axios from 'axios'
export const axios = Axios.create()

import { createClass } from '../components/parent/parent/Parent.vue'
import { insertUtilMixins as insertToParentA } from '../components/parent/ParentA.vue'
import { insertUtilMixins as insertToParentB } from '../components/parent/ParentB.vue'
import { insertMockHttpClient } from './utils/mockHttpClient.vue'

const mockHttpClient = Axios.create()
mockHttpClient.interceptors.request.use(
  request => null,
  request => null
)

mockHttpClient.interceptors.response.use((response) => {
  return Promise.resolve({
    status: 200,
    data: {
      textA: '',
      textB: '',
      selectA: ''
    }
  })
}, (err) => {
  return Promise.resolve({
    status: 200,
    data: {
      textA: 'textA',
      textB: 'textB',
      selectA: ''
    }
  })
})

const MixinClass = insertMockHttpClient(mockHttpClient)

export const ParentA = createClass(
  insertToParentA([ MixinClass ])
)

export const ParentB = createClass(
  insertToParentB([ MixinClass ])
)