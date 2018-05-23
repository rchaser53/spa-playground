import { createClass } from '../components/parent/parent/Parent.vue'
import { insertUtilMixins as insertToParentA } from '../components/parent/ParentA.vue'
import { insertUtilMixins as insertToParentB } from '../components/parent/ParentB.vue'
import { insertMockHttpClient } from './utils/mockHttpClient.vue'
import MockErrorHandler from './utils/mockErrorHandler.vue'

const createNomalMixin = () => {
  const mockClient = {
    get() {
      return Promise.resolve({
        data: {
          textA: 'textA',
          textB: 'textB',
          selectA: ''
        }
      })
    }
  }
  return insertMockHttpClient(mockClient)
}

const NormalMixinClass = createNomalMixin()
export const ParentA = createClass(
  insertToParentA([ NormalMixinClass ])
)
export const ParentB = createClass(
  insertToParentB([ NormalMixinClass ])
)

const createErrorMixin = () => {
  const mockClient = {
    get() {
      return Promise.reject({
        status: 500
      })
    }
  }
  return insertMockHttpClient(mockClient)
}

const ErrorMixinClass = createErrorMixin()
export const ErrorParentA = createClass(
  insertToParentA([ MockErrorHandler, ErrorMixinClass ])
)

export default (storiesOf) => {
  return storiesOf
          .add('render parentA', () => ({
            components: { ParentA },
            template: '<parent-a></parent-a>'
          }))
          .add('render ParentB', () => ({
            components: { ParentB },
            template: '<parent-b></parent-b>'
          }))
          .add('connection error in parentA', () => ({
            components: { ErrorParentA },
            template: '<error-parent-a />'
          }))
}