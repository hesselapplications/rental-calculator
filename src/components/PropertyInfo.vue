<template>
  <v-card>
    <v-card-title class="primary--text">Property Info</v-card-title>
    <v-card-text>
      <v-row dense>
        <!-- ADDRESS -->
        <v-col cols="6">
          <v-text-field
            v-model.trim="address"
            label="Address"
            outlined
          ></v-text-field>
        </v-col>

        <!-- DESCRIPTION -->
        <v-col cols="6">
          <v-text-field
            v-model.trim="description"
            label="Description"
            outlined
          ></v-text-field>
        </v-col>

        <!-- SQUARE FEET -->
        <v-col cols="6">
          <v-text-field
            v-model.number="squareFeet"
            label="Square Feet"
            type="number"
            outlined
          ></v-text-field>
        </v-col>
      </v-row>
    </v-card-text>
  </v-card>
</template>

<script>
import { sync } from "vuex-pathify";

export default {
  computed: {
    ...sync(["address", "description", "squareFeet"]),
    title() {
      return [this.address, this.description]
        .filter(value => value != null && value != "")
        .join(" - ")
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
