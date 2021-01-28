<template>
  <v-card>
    <v-card-title class="primary--text">Results</v-card-title>
    <v-card-text>
      <p>Down Payment Amount: ${{ downPaymentAmount }}</p>
      <p>Down Payment Percentage: {{ downPaymentPercentage }}%</p>
      <p>Total Interest Paid: ${{ totalInterestPaid }}</p>
      <p>Mortgage Total: ${{ mortgageTotal }}</p>
      <p>Total Cost To Close: ${{ totalCostToClose }}</p>
    </v-card-text>
  </v-card>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters([
      "downPaymentAmount",
      "downPaymentPercentage",
      "totalInterestPaid",
      "mortgageTotal",
      "totalCostToClose"
    ]),
  },
};
</script>
