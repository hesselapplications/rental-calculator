<template>
  <v-row dense>
    <!-- CASH PURCHASE -->
    <!-- <v-col lg="2" md="4" cols="6">
          <v-checkbox
            v-model="cashPurchase"
            label="Cash Purchase?"
          ></v-checkbox>
        </v-col> -->

    <template v-if="!cashPurchase">
      <!-- DOWN PAYMENT -->
      <v-col lg="2" md="4" cols="6">
        <percent-input
          v-model.number="downPaymentPercentage"
          label="Down Payment"
        ></percent-input>
      </v-col>

      <!-- INTEREST RATE -->
      <v-col lg="2" md="4" cols="6">
        <percent-input
          v-model.number="interestRate"
          label="Interest Rate"
        ></percent-input>
      </v-col>

      <!-- INSURANCE RATE -->
      <v-col lg="2" md="4" cols="6">
        <percent-input
          v-model.number="insuranceRate"
          label="Insurance Rate"
        ></percent-input>
      </v-col>

      <!-- LOAN POINTS -->
      <v-col lg="2" md="4" cols="6">
        <percent-input
          v-model.number="loanPoints"
          label="Loan Points"
        ></percent-input>
      </v-col>

      <!-- TERM YEARS -->
      <v-col lg="2" md="4" cols="6">
        <v-text-field
          v-model.number="termYears"
          label="Term Years"
          type="number"
          filled
        ></v-text-field>
      </v-col>
    </template>
  </v-row>
</template>

<script>
import PercentInput from "@/components/inputs/PercentInput.vue";
import { sync } from "vuex-pathify";

export default {
  components: {
    PercentInput,
  },
  computed: {
    ...sync([
      "cashPurchase",
      "downPaymentPercentage",
      "interestRate",
      "insuranceRate",
      "loanPoints",
      "termYears",
    ]),
  },
};
</script>
