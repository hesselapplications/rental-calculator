<template>
  <v-card>
    <v-card-title>Mortgage</v-card-title>
    <v-card-text>
      <v-row>
        <v-col cols="4">
          <money-input
            v-model="purchasePrice"
            label="Purchase Price"
          ></money-input>
        </v-col>
        <v-col cols="4">
          <percent-input
            v-model="downPaymentPercent"
            label="Down Payment"
          ></percent-input>
        </v-col>
        <v-col cols="4">
          <percent-input
            :value="loanAmount"
            label="Loan Amount"
            disabled
          ></percent-input>
        </v-col>
        <v-col cols="4">
          <v-text-field
            v-model="termYears"
            label="Term Years"
            type="number"
            outlined
          ></v-text-field>
        </v-col>
        <v-col cols="4">
          <percent-input :value="mortgageRate" label="Rate"></percent-input>
        </v-col>
      </v-row>
    </v-card-text>
  </v-card>
</template>

<script>
import MoneyInput from "@/components/inputs/MoneyInput.vue"
import PercentInput from "@/components/inputs/PercentInput.vue"

export default {
  components: {
    MoneyInput,
    PercentInput
  },
  data() {
    return {
      purchasePrice: 400000,
      downPaymentPercent: 20,
      termYears: 30,
      mortgageRate: 2.75
    }
  },
  computed: {
    loanAmount() {
      return this.purchasePrice * (this.downPaymentPercent / 100);
    },
  }
};
</script>
