<template>
  <v-card>
    <v-card-title class="primary--text">Income</v-card-title>
    <v-card-text>
      <v-row dense>
        <!-- GROSS MONTHLY INCOME -->
        <v-col cols="4">
          <money-input
            v-model="grossMonthlyIncome"
            label="Gross Monthly Income"
          ></money-input>
        </v-col>
      </v-row>
    </v-card-text>
  </v-card>
</template>

<script>
import MoneyInput from "@/components/inputs/MoneyInput.vue";
import { sync } from 'vuex-pathify'

export default {
  components: {
    MoneyInput
  },
  computed: {
    ...sync("income@*"),
  }
};
</script>
