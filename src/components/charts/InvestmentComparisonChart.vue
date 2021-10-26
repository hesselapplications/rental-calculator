<template>
  <div>
    <apexchart :options="options" :series="series"></apexchart>

    <v-row>
      <v-col md="4" cols="6">
        <money-input v-model.number="principal" label="Principal"></money-input>
      </v-col>
      <v-col md="4" cols="6">
        <money-input
          v-model.number="monthlyStockContribution"
          label="Monthly Stock Contribution"
        ></money-input>
      </v-col>
      <v-col md="4" cols="6">
        <percent-input
          v-model.number="annualStockInterest"
          label="Annual Stock Interest"
        ></percent-input>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import format from "@/mixins/format.js";
import MoneyInput from "@/components/inputs/MoneyInput.vue";
import PercentInput from "@/components/inputs/PercentInput.vue";
import { sync } from "vuex-pathify";
import { mapGetters } from "vuex";

export default {
  mixins: [format],
  components: {
    MoneyInput,
    PercentInput,
  },
  computed: {
    ...mapGetters(["investmentComparison", "totalCostToClose"]),
    ...sync(["monthlyStockContribution", "annualStockInterest", "principal"]),
    series() {
      return [
        {
          name: "Stock Only",
          data: this.investmentComparison.stockOnly,
        },
        {
          name: "Stock And Property",
          data: this.investmentComparison.stockAndProperty,
        },
      ];
    },
    options() {
      return {
        title: {
          align: "center",
          text: "Investment Comparison",
          style: {
            color: "#9e9e9e",
          },
        },
        theme: {
          monochrome: {
            enabled: true,
            color: "#90A4AE",
            shadeIntensity: 1,
            shadeTo: "dark",
          },
        },
        chart: {
          height: 350,
          type: "line",
          stacked: false,
          fontFamily: "Roboto",
          toolbar: {
            show: false,
          },
          animations: {
            enabled: false,
          },
        },
        tooltip: {
          x: {
            show: false,
          },
        },
        yaxis: {
          title: {
            text: "Value",
          },
          labels: {
            formatter: this.formatUSD,
          },
          opposite: true,
          tickAmount: 10,
        },
        xaxis: {
          title: {
            text: "Year",
          },
          tooltip: {
            enabled: false,
          },
        },
      };
    },
  },
  watch: {
    totalCostToClose: {
      immediate: true,
      handler: function (totalCostToClose) {
        this.principal = totalCostToClose;
      },
    },
  },
};
</script>
<style>
.apexcharts-title-text {
  letter-spacing: 0.166em;
  font-weight: 500;
  font-size: 0.75rem;
  text-transform: uppercase;
}
</style>