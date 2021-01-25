<template>
  <v-card>
    <v-card-title class="primary--text">Property Info</v-card-title>
    <v-card-text>
      <v-row dense>
        <!-- ADDRESS -->
        <v-col cols="6">
          <v-text-field
            v-model="address"
            label="Address"
            outlined
          ></v-text-field>
        </v-col>

        <!-- DESCRIPTION -->
        <v-col cols="6">
          <v-text-field v-model="description" label="Description" outlined></v-text-field>
        </v-col>
      </v-row>
    </v-card-text>
  </v-card>
</template>

<script>
import { sync } from 'vuex-pathify'

export default {
  computed: {
    ...sync("propertyInfo@*"),
    title() {
      return `${this.address} - ${this.description}`;
    }
  },
  watch: {
    title(title) {
      document.title = title
    }
  }
};
</script>
