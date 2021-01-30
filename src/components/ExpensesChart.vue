<template>
  <apexchart type="donut" :options="options" :series="series"></apexchart>
</template>

<script>
import format from "@/mixins/format.js";
import { mapGetters } from "vuex";

export default {
  mixins: [format],
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
      "totalMonthlyExpenses",
    ]),
    expenses() {
      const expenses = [
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

      return expenses
        .filter((expense) => expense.value != null && expense.value != 0)
        .sort((a, b) => b.value - a.value);
    },
    series() {
      return this.expenses.map((expense) => expense.value);
    },
    options() {
      return {
        dataLabels: {
          enabled: false,
        },
        tooltip: {
          enabled: false,
        },
        theme: {
          monochrome: {
            enabled: true,
            color: "#FF5252",
            shadeIntensity: 1,
          },
        },
        legend: {
          show: false,
        },
        chart: {
          type: "donut",
        },
        states: {
          active: {
            filter: {
              type: "light",
            },
          },
        },
        labels: this.expenses.map((expense) => expense.label),
        plotOptions: {
          pie: {
            expandOnClick: false,
            donut: {
              labels: {
                show: true,
                name: {
                  color: "#000",
                },
                value: {
                  fontWeight: 600,
                  formatter: this.formatUSD,
                },
                total: {
                  show: true,
                  color: "#000",
                  formatter: (w) => {
                    const total = w.globals.seriesTotals.reduce(
                      (a, b) => a + b,
                      0
                    );
                    return this.formatUSD(total);
                  },
                },
              },
            },
          },
        },
      };
    },
  },
};
</script>
