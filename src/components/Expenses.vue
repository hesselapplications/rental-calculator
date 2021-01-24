<template>
  <v-card>
    <v-card-title class="primary--text">Expenses</v-card-title>
    <v-card-text>
      <v-row dense>
        <!-- ANNUAL PROPERTY TAXES -->
        <v-col cols="4">
          <money-input
            v-model="annualPropertyTaxes"
            label="Annual Property Taxes"
          ></money-input>
        </v-col>

        <!-- MONTHLY PROPERTY INSURANCE -->
        <v-col cols="4">
          <money-input
            v-model="monthlyPropertyInsurance"
            label="Monthly Property Insurance"
          ></money-input>
        </v-col>

        <!-- REPAIRS AND MAINTENANCE -->
        <v-col cols="4">
          <percent-input
            :value="repairsAndMaintenance"
            label="Repairs and Maintenance"
          ></percent-input>
        </v-col>

        <!-- VACANCY RATE -->
        <v-col cols="4">
          <percent-input
            :value="vacancyRate"
            label="Vacancy Rate"
          ></percent-input>
        </v-col>

        <!-- CAPITAL EXPENDATURES -->
        <v-col cols="4">
          <percent-input
            :value="capitalExpendatures"
            label="Capital Expendatures"
          ></percent-input>
        </v-col>

        <!-- MANAGEMENT FEES -->
        <v-col cols="4">
          <percent-input
            :value="managementFees"
            label="Management Fees"
          ></percent-input>
        </v-col>

        <!-- ELECTRICITY -->
        <v-col cols="4">
          <money-input v-model="electricity" label="Electricity"></money-input>
        </v-col>

        <!-- GAS -->
        <v-col cols="4">
          <money-input v-model="gas" label="Gas"></money-input>
        </v-col>

        <!-- WATER AND SEWER -->
        <v-col cols="4">
          <money-input
            v-model="waterAndSewer"
            label="Water and Sewer"
          ></money-input>
        </v-col>

        <!-- GARBAGE -->
        <v-col cols="4">
          <money-input v-model="garbage" label="Garbage"></money-input>
        </v-col>

        <!-- HOA FEES -->
        <v-col cols="4">
          <money-input
            v-model="hoa"
            label="Home Owners Association"
          ></money-input>
        </v-col>

        <!-- OTHER -->
        <v-col cols="4">
          <money-input v-model="other" label="Other"></money-input>
        </v-col>
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
      annualPropertyTaxes: 4000,
      monthlyPropertyInsurance: 75,
      repairsAndMaintenance: 10,
      vacancyRate: 5,
      capitalExpendatures: 10,
      managementFees: 0,
      electricity: 0,
      gas: 0,
      waterAndSewer: 0,
      garbage: 0,
      hoa: 0,
      other: 0,
    };
  },
};
</script>
