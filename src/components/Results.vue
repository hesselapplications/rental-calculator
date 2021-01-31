<template>
  <v-row dense>
    <v-col md="8" cols="12">
      <v-row>
        <!-- LOAN DETAILS -->
        <result label="Down Payment Amount">{{
          formatUSD(downPaymentAmount)
        }}</result>
        <result label="Down Payment Percentage">{{
          formatPercentage(downPaymentPercentage)
        }}</result>
        <result label="Total Interest Paid">{{
          formatUSD(totalInterestPaid)
        }}</result>
        <result label="Mortgage Total">{{ formatUSD(mortgageTotal) }}</result>
        <result label="Total Cost To Close">{{
          formatUSD(totalCostToClose)
        }}</result>

        <!-- RETURNS -->
        <result label="Cash Flow">{{ formatUSD(monthlyCashFlow) }}</result>
        <result label="Cap Rate">{{ formatPercentage(capRate) }}</result>
        <result label="Cash On Cash Return">{{
          formatPercentage(cashOnCashReturn)
        }}</result>
        <result label="Cost Per Square Foot">{{
          formatUSD(costPerSquareFoot)
        }}</result>
      </v-row>
    </v-col>

    <!-- MONTHLY EXPENSES -->
    <v-col md="4" cols="12">
      <div class="overline grey--text text-center">Monthly Expenses</div>
      <expenses-chart />
    </v-col>
  </v-row>
</template>

<script>
import ExpensesChart from "@/components/ExpensesChart.vue";
import Result from "@/components/Result.vue";
import format from "@/mixins/format.js";
import { mapGetters } from "vuex";

export default {
  components: { ExpensesChart, Result },
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
