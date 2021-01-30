<template>
  <v-card>
    <v-card-title class="primary--text">Loan Details</v-card-title>
    <v-card-text>
      <div>Down Payment Amount: {{ formatUSD(downPaymentAmount) }}</div>
      <div>
        Down Payment Percentage: {{ formatPercentage(downPaymentPercentage) }}
      </div>
      <div>Total Interest Paid: {{ formatUSD(totalInterestPaid) }}</div>
      <div>Mortgage Total: {{ formatUSD(mortgageTotal) }}</div>
      <div>Total Cost To Close: {{ formatUSD(totalCostToClose) }}</div>
    </v-card-text>

    <v-divider></v-divider>

    <v-card-title class="primary--text">Returns</v-card-title>
    <v-card-text>
      <div>Cash Flow: {{ formatUSD(monthlyCashFlow) }}</div>
      <div>Cap Rate: {{ formatPercentage(capRate) }}</div>
      <div>Cash On Cash Return: {{ formatPercentage(cashOnCashReturn) }}</div>
      <div>
        Cost Per Square Foot: {{ formatUSD(costPerSquareFoot) }} / sq ft
      </div>
    </v-card-text>

    <v-divider></v-divider>

    <v-card-title class="red--text">Monthly Expenses</v-card-title>
    <v-card-text>
      <expenses-chart />
    </v-card-text>
  </v-card>
</template>

<script>
import ExpensesChart from "@/components/ExpensesChart.vue";
import format from "@/mixins/format.js";
import { mapGetters } from "vuex";

export default {
  components: { ExpensesChart },
  mixins: [format],
  computed: {
    ...mapGetters([
      "downPaymentAmount",
      "downPaymentPercentage",
      "totalInterestPaid",
      "mortgageTotal",
      "totalCostToClose",
      "monthlyCashFlow",
      "capRate",
      "cashOnCashReturn",
      "costPerSquareFoot",
    ]),
  },
  methods: {
    formatUSD(number) {
      const formatter = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
        minimumFractionDigits: 2,
      });

      return formatter.format(number);
    },
    formatPercentage(number) {
      const formatter = new Intl.NumberFormat("en-US", {
        style: "percent",
        minimumFractionDigits: 0,
        maximumFractionDigits: 3,
      });

      return formatter.format(number);
    },
  },
};
</script>
