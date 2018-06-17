import { Module } from 'vuex'
import { RootState } from './store'

// mutation types
const OPEN_MODAL = 'OPEN_MODAL'
const CLOSE_MODAL = 'CLOSE_MODAL'

// types
export type ModalStatus = 'CLOSE' | 'CONFIRM' | 'SIMPLE'
export interface State {
  status: ModalStatus
}

export const initialState: State = {
  status: 'CONFIRM'
}

const store: Module<State, RootState> = {
  namespaced: true,
  state: initialState,

  getters: {
    modalStatus: (state): ModalStatus => {
      return state.status
    },
    isOpen: (state): boolean => {
      return state.status !== 'CLOSE'
    }
  },

  mutations: {
    [OPEN_MODAL](state, nextState: ModalStatus) {
      state.status = nextState
    },
    [CLOSE_MODAL](state) {
      state.status = 'CLOSE'
    }
  },

  actions: {
    openModal({ commit }, status: ModalStatus) {
      commit(OPEN_MODAL, status)
    },
    closeLoading({ commit }) {
      commit(CLOSE_MODAL)
    }
  }
}

export default store
