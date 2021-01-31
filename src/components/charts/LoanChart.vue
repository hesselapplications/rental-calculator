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
      "loanAmount",
      "totalInterestPaid",
    ]),
    expenses() {
      return [
        {
          label: "Loan Amount",
          value: this.loanAmount,
        },
        {
          label: "Interest Paid",
          value: this.totalInterestPaid,
        },
      ];
    },
  },
};
</script>
