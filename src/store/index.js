import Vue from 'vue'
import Vuex from 'vuex'
import pathify from 'vuex-pathify'
import { make } from 'vuex-pathify'
import formulajs from "@formulajs/formulajs"

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
  downPaymentAmount: state => {
    return state.purchasePrice - state.loanAmount;
  },
  downPaymentPercentage: (state, getters) => {
    const percentage = (getters.downPaymentAmount / state.purchasePrice) * 100
    return percentage.toFixed(2)
  },
  totalInterestPaid: state => {
    const rate = state.interestRate / 100 / 12;
    const numPeriods = state.termYears * 12;
    const presentValue = state.loanAmount;
    const startPeriod = 1;
    const endPeriod = numPeriods;
    const type = 0;
    return formulajs.CUMIPMT(rate, numPeriods, presentValue, startPeriod, endPeriod, type).toFixed(2) * -1;
  },
  mortgageTotal: (state, getters) => {
    return state.loanAmount + getters.totalInterestPaid;
  },
  totalCostToClose: (state, getters) => {
    return getters.downPaymentAmount + state.closingCosts + (state.loanAmount * (state.loanPoints / 100));
  }
}

export default new Vuex.Store({
  plugins: [ pathify.plugin ],
  state,
  mutations,
  actions,
  getters,
})
