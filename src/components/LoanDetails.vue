<template>
  <v-card>
    <v-card-title class="primary--text">
      Loan Details
    </v-card-title>
    <v-card-text>
      <v-row dense>
        <!-- CASH PURCHASE -->
        <v-col cols="12">
          <v-checkbox
            v-model="cashPurchase"
            label="Cash Purchase?"
          ></v-checkbox>
        </v-col>

        <template v-if="!cashPurchase">
          <!-- LOAN AMOUNT -->
          <v-col cols="4">
            <money-input
              :value="loanAmount"
              label="Loan Amount"
            ></money-input>
          </v-col>

          <!-- INTEREST RATE -->
          <v-col cols="4">
            <percent-input :value="interestRate" label="Interest Rate"></percent-input>
          </v-col>

          <!-- INSURANCE RATE -->
          <v-col cols="4">
            <percent-input :value="insuranceRate" label="Insurance Rate"></percent-input>
          </v-col>

          <!-- LOAN POINTS -->
          <v-col cols="4">
            <percent-input :value="loanPoints" label="Loan Points"></percent-input>
          </v-col>

          <!-- TERM YEARS -->
          <v-col cols="4">
            <v-text-field
              v-model="termYears"
              label="Term Years"
              type="number"
              outlined
            ></v-text-field>
          </v-col>
        </template>
      </v-row>
    </v-card-text>
  </v-card>
</template>

<script>
import MoneyInput from "@/components/inputs/MoneyInput.vue";
import PercentInput from "@/components/inputs/PercentInput.vue";

export default {
  components: {
    MoneyInput,
    PercentInput,
  },
  data() {
    return {
      cashPurchase: false,
      loanAmount: 400000,
      interestRate: 2.75,
      insuranceRate: 0.23,
      loanPoints: 0.75,
      termYears: 30,
    };
  },
};
</script>
