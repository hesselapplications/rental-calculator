<template>
  <v-card>
    <v-card-title class="primary--text">Purchase</v-card-title>
    <v-card-text>
      <v-row>
        <!-- PURCHASE PRICE -->
        <v-col cols="4">
          <money-input
            v-model="purchasePrice"
            label="Purchase Price"
          ></money-input>
        </v-col>

        <!-- CLOSING COSTS -->
        <v-col cols="4">
          <money-input
            v-model="closingCosts"
            label="Closing Costs"
            :hint="closingCostsEstimate"
          ></money-input>
        </v-col>
      </v-row>
    </v-card-text>
  </v-card>
</template>

<script>
import MoneyInput from "@/components/inputs/MoneyInput.vue"

export default {
  components: {
    MoneyInput,
  },
  data() {
    return {
      purchasePrice: 450000,
      closingCosts: 3500,
    }
  },
  computed: {
    closingCostsEstimate() {
      return `Estimate: $${this.purchasePrice * 0.01} to $${this.purchasePrice * 0.02}`;
    }
  }
};
</script>
