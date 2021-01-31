<template>
  <apexchart type="donut" :options="options" :series="series"></apexchart>
</template>

<script>
import format from "@/mixins/format.js";

export default {
  mixins: [format],
  props: {
    expenses: Array
  },
  computed: {
    sortedExpenses() {
      return this.expenses
        .filter((expense) => expense.value != null && expense.value != 0)
        .sort((a, b) => b.value - a.value);
    },
    series() {
      return this.sortedExpenses.map((expense) => expense.value);
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
            color: "#FF6859",
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
        labels: this.sortedExpenses.map((expense) => expense.label),
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
