<template>
  <expenses-base-chart :expenses="expenses" color="#7d4e57"/>
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
      "repairCosts"
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
        {
          label: "Repair Costs",
          value: this.repairCosts
        }
      ];
    },
  },
};
</script>
