import Vue from 'vue'
import Vuex from 'vuex'
import pathify from 'vuex-pathify'
import { make } from 'vuex-pathify'

Vue.use(Vuex)

// STATE
const state = {
  propertyInfo: {
    address: "123 Main St",
    description: "FHA 3.5%",
  },
  purchase: {
    purchasePrice: 450000,
    closingCosts: 3500,
    rehabbing: false,
    afterRepairValue: 500000,
    repairCosts: 50000,
  },
  loanDetails: {
    cashPurchase: false,
    loanAmount: 400000,
    interestRate: 2.75,
    insuranceRate: 0.23,
    loanPoints: 0.75,
    termYears: 30,
  },
  income: {
    grossMonthlyIncome: 1150 + 1400
  },
  expenses: {
    annualPropertyTaxes: 4000,
    monthlyPropertyInsurance: 75,
    repairsAndMaintenance: 10,
    vacancyRate: 5,
    capitalExpendatures: 10,
    managementFees: 0,
    electricity: 0,
    gas: 0,
    waterAndSewer: 0,
    garbage: 0,
    hoa: 0,
    other: 0,
  }
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
