<template>
  <div>
    <apexchart :options="options" :series="series" height="400px"></apexchart>

    <v-row>
      <v-col md="4" cols="8">
        <money-input v-model.number="principal" label="Principal"></money-input>
      </v-col>
      <v-col md="4" cols="8">
        <money-input
          v-model.number="monthlyStockContribution"
          label="Monthly Stock Contribution"
        ></money-input>
      </v-col>
      <v-col md="4" cols="8">
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
    ...mapGetters(["investmentComparison", "upfrontCost"]),
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
          type: "line",
          stacked: false,
          fontFamily: "Roboto",
          toolbar: {
            show: false,
          },
          animations: {
            enabled: false,
          },
          zoom: {
            enabled: false
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
            formatter: this.compactFormatUSD,
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
          labels: {
            rotate: 0,
            hideOverlappingLabels: false
          },
        },
      };
    },
  },
  watch: {
    upfrontCost: {
      immediate: true,
      handler: function (upfrontCost) {
        this.principal = upfrontCost;
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

.apexcharts-xaxis-label {
  display: none;
}

.apexcharts-xaxis-label:nth-child(5n + 1) {
  display: revert;
}
</style>