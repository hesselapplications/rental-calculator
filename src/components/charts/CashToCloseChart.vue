<template>
  <expenses-base-chart :expenses="expenses"/>
</template>

<script>
import ExpensesBaseChart from "@/components/charts/ExpensesBaseChart.vue";
import { mapGetters } from "vuex";

export default {
  components: {
    ExpensesBaseChart
  },
  computed: {
    ...mapGetters([
      "downPaymentAmount",
      "closingCosts",
      "loanPointsAmount",
    ]),
    expenses() {
      return [
        {
          label: "Down Payment",
          value: this.downPaymentAmount,
        },
        {
          label: "Closing Costs",
          value: this.closingCosts,
        },
        {
          label: "Loan Points",
          value: this.loanPointsAmount,
        },
      ];
    },
  },
};
</script>
