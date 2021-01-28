<template>
  <v-card>
    <v-card-title class="primary--text">Expenses</v-card-title>
    <v-card-text>
      <v-row dense>
        <!-- ANNUAL PROPERTY TAXES -->
        <v-col cols="4">
          <money-input
            v-model.number="annualPropertyTaxes"
            label="Annual Property Taxes"
          ></money-input>
        </v-col>

        <!-- MONTHLY PROPERTY INSURANCE -->
        <v-col cols="4">
          <money-input
            v-model.number="monthlyPropertyInsurance"
            label="Monthly Property Insurance"
          ></money-input>
        </v-col>

        <!-- REPAIRS AND MAINTENANCE -->
        <v-col cols="4">
          <percent-input
            v-model.number="repairsAndMaintenance"
            label="Repairs and Maintenance"
          ></percent-input>
        </v-col>

        <!-- VACANCY RATE -->
        <v-col cols="4">
          <percent-input
            v-model.number="vacancyRate"
            label="Vacancy Rate"
          ></percent-input>
        </v-col>

        <!-- CAPITAL EXPENDATURES -->
        <v-col cols="4">
          <percent-input
            v-model.number="capitalExpendatures"
            label="Capital Expendatures"
          ></percent-input>
        </v-col>

        <!-- MANAGEMENT FEES -->
        <v-col cols="4">
          <percent-input
            v-model.number="managementFees"
            label="Management Fees"
          ></percent-input>
        </v-col>

        <!-- ELECTRICITY -->
        <v-col cols="4">
          <money-input v-model.number="electricity" label="Electricity"></money-input>
        </v-col>

        <!-- GAS -->
        <v-col cols="4">
          <money-input v-model.number="gas" label="Gas"></money-input>
        </v-col>

        <!-- WATER AND SEWER -->
        <v-col cols="4">
          <money-input
            v-model.number="waterAndSewer"
            label="Water and Sewer"
          ></money-input>
        </v-col>

        <!-- GARBAGE -->
        <v-col cols="4">
          <money-input v-model.number="garbage" label="Garbage"></money-input>
        </v-col>

        <!-- HOA FEES -->
        <v-col cols="4">
          <money-input
            v-model.number="hoa"
            label="Home Owners Association"
          ></money-input>
        </v-col>

        <!-- OTHER -->
        <v-col cols="4">
          <money-input v-model.number="other" label="Other"></money-input>
        </v-col>
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
    ...sync([
      "annualPropertyTaxes",
      "monthlyPropertyInsurance",
      "repairsAndMaintenance",
      "vacancyRate",
      "capitalExpendatures",
      "managementFees",
      "electricity",
      "gas",
      "waterAndSewer",
      "garbage",
      "hoa",
      "other"
    ]),
  }
};
</script>
