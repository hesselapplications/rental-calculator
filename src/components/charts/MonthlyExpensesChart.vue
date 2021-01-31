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
      "monthlyPrincipalAndInterest",
      "monthlyMortgageInsurance",
      "monthlyPropertyTaxes",
      "monthlyVacancy",
      "monthlyCapitalExpendatures",
      "monthlyMaintenance",
      "monthlyPropertyInsurance",
      "managementFees",
      "electricity",
      "gas",
      "waterAndSewer",
      "garbage",
      "hoa",
      "other",
    ]),
    expenses() {
      return [
        {
          label: "Principal & Interest",
          value: this.monthlyPrincipalAndInterest,
        },
        {
          label: "Mortgage Insurance",
          value: this.monthlyMortgageInsurance,
        },
        {
          label: "Property Taxes",
          value: this.monthlyPropertyTaxes,
        },
        {
          label: "Vacancy",
          value: this.monthlyVacancy,
        },
        {
          label: "CapEx",
          value: this.monthlyCapitalExpendatures,
        },
        {
          label: "Maintenance",
          value: this.monthlyMaintenance,
        },
        {
          label: "Property Insurance",
          value: this.monthlyPropertyInsurance,
        },
        {
          label: "Management Fees",
          value: this.managementFees,
        },
        {
          label: "Electricity",
          value: this.electricity,
        },
        {
          label: "Gas",
          value: this.gas,
        },
        {
          label: "Water & Sewer",
          value: this.waterAndSewer,
        },
        {
          label: "Garbage",
          value: this.garbage,
        },
        {
          label: "HOA",
          value: this.hoa,
        },
        {
          label: "Other",
          value: this.other,
        },
      ];
    },
  },
};
</script>
