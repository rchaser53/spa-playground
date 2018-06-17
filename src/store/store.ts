import Vue from 'vue'
import Vuex from 'vuex'

import modal, { State as ModalState } from './modal'

export interface RootState {
  modal: ModalState
}

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    modal
  }
})
