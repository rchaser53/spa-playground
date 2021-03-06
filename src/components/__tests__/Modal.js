import Vue from 'vue'
import * as VueServerRenderer from 'vue-server-renderer'
import Modal from '../modal/Modal.vue'

const renderer = VueServerRenderer.createRenderer()

const render = (vm) => {
  return new Promise((resolve, reject) => {
    renderer.renderToString(vm, (err, str) => {
      if (err) {
        return reject(err)
      }
      resolve(str)
    })
  })
}

test('render modal', () => {
  const vm = new Vue({
    el: document.createElement('div'),
    render: (h) => h(Modal)
  })

  expect(vm).toMatchSnapshot()

})
