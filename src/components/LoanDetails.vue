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
              v-model.number="loanAmount"
              label="Loan Amount"
            ></money-input>
          </v-col>

          <!-- INTEREST RATE -->
          <v-col cols="4">
            <percent-input v-model.number="interestRate" label="Interest Rate"></percent-input>
          </v-col>

          <!-- INSURANCE RATE -->
          <v-col cols="4">
            <percent-input v-model.number="insuranceRate" label="Insurance Rate"></percent-input>
          </v-col>

          <!-- LOAN POINTS -->
          <v-col cols="4">
            <percent-input v-model.number="loanPoints" label="Loan Points"></percent-input>
          </v-col>

          <!-- TERM YEARS -->
          <v-col cols="4">
            <v-text-field
              v-model.number="termYears"
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
import { sync } from 'vuex-pathify'

export default {
  components: {
    MoneyInput,
    PercentInput,
  },
  computed: {
    ...sync("loanDetails@*"),
  }
};
</script>
