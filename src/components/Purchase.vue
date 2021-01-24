<template>
  <v-card>
    <v-card-title class="primary--text">Purchase</v-card-title>
    <v-card-text>
      <v-row dense>
        <!-- PURCHASE PRICE -->
        <v-col cols="6">
          <money-input
            v-model="purchasePrice"
            label="Purchase Price"
          ></money-input>
        </v-col>

        <!-- CLOSING COSTS -->
        <v-col cols="6">
          <money-input
            v-model="closingCosts"
            label="Closing Costs"
            :hint="closingCostsEstimate"
          ></money-input>
        </v-col>

        <!-- REHABBING -->
        <v-col cols="12">
          <v-checkbox
            v-model="rehabbing"
            label="I will be rehabbing this property"
          ></v-checkbox>
        </v-col>

        <template v-if="rehabbing">
          <!-- AFTER REPAIR VALUE -->
          <v-col cols="6">
            <money-input
              v-model="afterRepairValue"
              label="After Repair Value"
              hint="Property value after all repairs have been completed"
            ></money-input>
          </v-col>

          <!-- REPAIR COSTS -->
          <v-col cols="6">
            <money-input
              v-model="repairCosts"
              label="Repair Costs"
            ></money-input>
          </v-col>
        </template>
      </v-row>
    </v-card-text>
  </v-card>
</template>

<script>
import MoneyInput from "@/components/inputs/MoneyInput.vue";

export default {
  components: {
    MoneyInput,
  },
  data() {
    return {
      purchasePrice: 450000,
      closingCosts: 3500,
      rehabbing: false,
      afterRepairValue: 500000,
      repairCosts: 50000,
    };
  },
  computed: {
    closingCostsEstimate() {
      return `Estimate: $${this.purchasePrice * 0.01} to $${
        this.purchasePrice * 0.02
      }`;
    },
  },
};
</script>
