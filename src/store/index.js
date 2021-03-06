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
  squareFeet: 0,

  // PURCHASE
  purchasePrice: 0,
  closingCosts: 0,
  rehabbing: false,
  afterRepairValue: 0,
  repairCosts: 0,

  // LOAN DETAILS
  cashPurchase: false,
  downPaymentPercentage: 0,
  loanAmount: 0,
  interestRate: 0,
  insuranceRate: 0,
  loanPoints: 0,
  termYears: 30,

  // INCOME
  grossMonthlyIncome: 0,

  // EXPENSES
  annualPropertyTaxes: 0,
  monthlyPropertyInsurance: 0,
  repairsAndMaintenance: 0,
  vacancyRate: 0,
  capitalExpendatures: 0,
  managementFees: 0,
  electricity: 0,
  gas: 0,
  waterAndSewer: 0,
  garbage: 0,
  hoa: 0,
  other: 0,
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
    return state.purchasePrice * state.downPaymentPercentage;
  },
  loanAmount: (state, getters) => {
    return state.purchasePrice - getters.downPaymentAmount;
  },
  totalInterestPaid: (state, getters) => {
    const rate = state.interestRate / 12;
    const numPeriods = state.termYears * 12;
    const presentValue = getters.loanAmount;
    const startPeriod = 1;
    const endPeriod = numPeriods;
    const type = 0;
    return formulajs.CUMIPMT(rate, numPeriods, presentValue, startPeriod, endPeriod, type) * -1;
  },
  loanPointsAmount: (state, getters) => {
    return getters.loanAmount * state.loanPoints;
  },
  totalCostToClose: (state, getters) => {
    return getters.downPaymentAmount + state.closingCosts + getters.loanPointsAmount;
  },
  monthlyPrincipalAndInterest: (state, getters) => {
    const rate = state.interestRate / 12;
    const numPeriods = state.termYears * 12;
    const presentValue = getters.loanAmount;
    return formulajs.PMT(rate, numPeriods, presentValue) * -1;
  },
  monthlyLoanInsurance: (state, getters) => {
    return (getters.loanAmount * state.insuranceRate) / 12;
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
      + getters.monthlyLoanInsurance
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
