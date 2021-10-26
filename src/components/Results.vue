<template>
  <div class="mr-10">
    <v-row>
      <!-- SIMPLE RESULTS -->
      <result
        v-for="{ label, value } in simpleResults"
        :key="label"
        :label="label"
        lg="3"
        md="6"
        cols="12"
      >
        <h2>{{ value }}</h2>
      </result>
    </v-row>

    <v-divider class="my-16"></v-divider>

    <!-- CHART RESULTS -->
    <v-row>
      <result
        v-for="{ label, chart } in chartResults"
        :key="label"
        :label="label"
        md="4"
        cols="12"
      >
        <component :is="chart" />
      </result>
    </v-row>

    <v-divider class="my-16"></v-divider>

    <InvestmentComparisonChart />
  </div>
</template>

<script>
import MonthlyExpensesChart from "@/components/charts/MonthlyExpensesChart.vue";
import CashToCloseChart from "@/components/charts/CashToCloseChart.vue";
import LoanChart from "@/components/charts/LoanChart.vue";
import InvestmentComparisonChart from "@/components/charts/InvestmentComparisonChart.vue";
import Result from "@/components/Result.vue";
import format from "@/mixins/format.js";
import { mapGetters } from "vuex";

export default {
  components: {
    MonthlyExpensesChart,
    CashToCloseChart,
    LoanChart,
    InvestmentComparisonChart,
    Result,
  },
  mixins: [format],
  computed: {
    ...mapGetters([
      "monthlyCashFlow",
      "capRate",
      "cashOnCashReturn",
      "costPerSquareFoot",
    ]),
    simpleResults() {
      return [
        {
          label: "Cash Flow",
          value: this.formatUSD(this.monthlyCashFlow),
        },
        {
          label: "Cap Rate",
          value: this.formatPercentage(this.capRate),
        },
        {
          label: "Cash On Cash Return",
          value: this.formatPercentage(this.cashOnCashReturn),
        },
        {
          label: "Cost Per Square Foot",
          value: this.formatUSD(this.costPerSquareFoot),
        },
      ];
    },
    chartResults() {
      return [
        {
          label: "Monthly Expenses",
          chart: "monthly-expenses-chart",
        },
        {
          label: "Cash To Close",
          chart: "cash-to-close-chart",
        },
        {
          label: "Loan",
          chart: "loan-chart",
        },
      ];
    },
  },
};
</script>