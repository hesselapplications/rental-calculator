import Vue from 'vue'
import Vuex from 'vuex'
import pathify from 'vuex-pathify'
import { make } from 'vuex-pathify'
import formulajs from "@formulajs/formulajs"

Vue.use(Vuex)

// STATE
const state = {
  currentStep: 1,

  // PROPERTY INFO
  address: null,
  description: null,
  squareFeet: null,

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
    return getters.downPaymentAmount / state.purchasePrice
  },
  totalInterestPaid: state => {
    const rate = state.interestRate / 12;
    const numPeriods = state.termYears * 12;
    const presentValue = state.loanAmount;
    const startPeriod = 1;
    const endPeriod = numPeriods;
    const type = 0;
    return formulajs.CUMIPMT(rate, numPeriods, presentValue, startPeriod, endPeriod, type) * -1;
  },
  mortgageTotal: (state, getters) => {
    return state.loanAmount + getters.totalInterestPaid;
  },
  totalCostToClose: (state, getters) => {
    return getters.downPaymentAmount + state.closingCosts + (state.loanAmount * state.loanPoints);
  },
  monthlyPrincipalAndInterest: state => {
    const rate = state.interestRate / 12;
    const numPeriods = state.termYears * 12;
    const presentValue = state.loanAmount;
    return formulajs.PMT(rate, numPeriods, presentValue) * -1;
  },
  monthlyMortgageInsurance: state => {
    return (state.loanAmount * state.insuranceRate) / 12;
  },
  monthlyPropertyTaxes: state => {
    return state.annualPropertyTaxes / 12;
  },
  monthlyVacancy: state => {
    return state.grossMonthlyIncome * state.vacancyRate;
  },
  monthlyCapitalExpendatures: state => {
    return state.grossMonthlyIncome * state.capitalExpendatures;
  },
  monthlyMaintenance: state => {
    return state.grossMonthlyIncome * state.repairsAndMaintenance;
  },
  totalMonthlyExpenses: (state, getters) => {
    return getters.monthlyPrincipalAndInterest
      + getters.monthlyMortgageInsurance
      + getters.monthlyPropertyTaxes
      + getters.monthlyVacancy
      + getters.monthlyCapitalExpendatures
      + getters.monthlyMaintenance
      + state.monthlyPropertyInsurance
      + state.managementFees
      + state.electricity
      + state.gas
      + state.waterAndSewer
      + state.hoa
      + state.garbage
      + state.other;
  },
  monthlyCashFlow: (state, getters) => {
    return state.grossMonthlyIncome - getters.totalMonthlyExpenses;
  },
  annualCashFlow: (state, getters) => {
    return getters.monthlyCashFlow * 12;
  },
  capRate: (state, getters) => {
    return getters.annualCashFlow / state.purchasePrice;
  },
  cashOnCashReturn: (state, getters) => {
    return getters.annualCashFlow / getters.totalCostToClose;
  },
  costPerSquareFoot: state => {
    return state.purchasePrice / state.squareFeet;
  }
}

export default new Vuex.Store({
  plugins: [ pathify.plugin ],
  state,
  mutations,
  actions,
  getters,
})
