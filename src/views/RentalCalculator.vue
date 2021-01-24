<template>
  <v-container>
    <v-row justify="center">
      <v-col cols="6">
        <v-card>
          <v-card-title>Rental Calculator</v-card-title>
          <v-card-text>
            <money-input label="Purchase Price" placeholder="400000"></money-input>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import MoneyInput from "@/components/MoneyInput.vue"

export default {
  components: {
    MoneyInput
  }
};
</script>
