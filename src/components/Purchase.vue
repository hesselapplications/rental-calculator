<template>
  <v-row dense>
    <!-- PURCHASE PRICE -->
    <v-col lg="2" md="4" cols="6">
      <money-input
        v-model.number="purchasePrice"
        label="Purchase Price"
      ></money-input>
    </v-col>

    <!-- CLOSING COSTS -->
    <v-col lg="2" md="4" cols="6">
      <money-input
        v-model.number="closingCosts"
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
      <v-col lg="2" md="4" cols="6">
        <money-input
          v-model.number="afterRepairValue"
          label="After Repair Value"
          hint="Property value after all repairs have been completed"
        ></money-input>
      </v-col>

      <!-- REPAIR COSTS -->
      <v-col lg="2" md="4" cols="6">
        <money-input
          v-model.number="repairCosts"
          label="Repair Costs"
        ></money-input>
      </v-col>
    </template>
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
    ...sync([
      "purchasePrice",
      "closingCosts",
      "rehabbing",
      "afterRepairValue",
      "repairCosts",
    ]),
    closingCostsEstimate() {
      return `Estimate: $${this.purchasePrice * 0.01} to $${
        this.purchasePrice * 0.02
      }`;
    },
  },
};
</script>
