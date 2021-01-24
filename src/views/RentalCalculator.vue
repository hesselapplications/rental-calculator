<template>
  <v-container>
    <v-row justify="center">
      <v-col cols="6">
        <mortgage/>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import Mortgage from "@/components/Mortgage.vue"

export default {
  components: {
    Mortgage
  }
};
</script>
