<template>
  <v-row dense>
    <!-- GROSS MONTHLY INCOME -->
    <v-col lg="2" md="4" cols="6">
      <money-input
        v-model.number="grossMonthlyIncome"
        label="Gross Monthly Income"
      ></money-input>
    </v-col>
  </v-row>
</template>

<script>
import MoneyInput from "@/components/inputs/MoneyInput.vue";
import { sync } from "vuex-pathify";

export default {
  components: {
    MoneyInput,
  },
  computed: {
    ...sync(["grossMonthlyIncome"]),
  },
};
</script>
