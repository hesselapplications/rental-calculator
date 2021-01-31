<template>
  <v-row dense>
    <!-- ADDRESS -->
    <v-col lg="5" md="6" cols="12">
      <v-text-field v-model.trim="address" label="Address" filled></v-text-field>
    </v-col>

    <!-- DESCRIPTION -->
    <v-col lg="5" md="6" cols="12">
      <v-text-field
        v-model.trim="description"
        label="Description"
        filled
      ></v-text-field>
    </v-col>

    <!-- SQUARE FEET -->
    <v-col lg="2" md="4" cols="6">
      <v-text-field
        v-model.number="squareFeet"
        label="Square Feet"
        type="number"
        filled
      ></v-text-field>
    </v-col>
  </v-row>
</template>

<script>
import { sync } from "vuex-pathify";

export default {
  computed: {
    ...sync(["address", "description", "squareFeet"]),
    title() {
      return [this.address, this.description]
        .filter((value) => value != null && value != "")
        .join(" - ");
    },
  },
  watch: {
    title: {
      immediate: true,
      handler(title) {
        document.title = title;
      },
    },
  },
};
</script>
