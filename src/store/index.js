import Vue from 'vue'
import Vuex from 'vuex'
import pathify from 'vuex-pathify'
import { make } from 'vuex-pathify'

Vue.use(Vuex)

const state = {
  propertyInfo: {
    address: "",
    description: "",
  },
  purchase: {

  },
  loanDetails: {

  },
  income: {

  },
  expenses: {

  }
}

// make all mutations
const mutations = make.mutations(state)

const actions = {
  ...make.actions(state),
}

const getters = {
  ...make.getters(state),
}

export default new Vuex.Store({
  plugins: [ pathify.plugin ],
  state,
  mutations,
  actions,
  getters,
})
