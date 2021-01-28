import Vue from 'vue'
import Vuex from 'vuex'
import pathify from 'vuex-pathify'
import { make } from 'vuex-pathify'

Vue.use(Vuex)

// STATE
const state = {
  // PROPERTY INFO
  address: null,
  description: null,

  // PURCHASE
  purchasePrice: null,
  closingCosts: null,
  rehabbing: false,
  afterRepairValue: null,
  repairCosts: null,

  // LOAN DETAILS
  cashPurchase: false,
  loanAmount: null,
  interestRate: null,
  insuranceRate: null,
  loanPoints: null,
  termYears: null,

  // INCOME
  grossMonthlyIncome: null,

  // EXPENSES
  annualPropertyTaxes: null,
  monthlyPropertyInsurance: null,
  repairsAndMaintenance: null,
  vacancyRate: null,
  capitalExpendatures: null,
  managementFees: null,
  electricity: null,
  gas: null,
  waterAndSewer: null,
  garbage: null,
  hoa: null,
  other: null,
}

// MUTATIONS
const mutations = make.mutations(state)

// ACTIONS
const actions = {
  ...make.actions(state),
}

// GETTERS
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
