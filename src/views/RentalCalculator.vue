<template>
  <v-container>
    <v-row justify="center">
      <v-col cols="4">
        <property-info class="my-4"></property-info>
        <purchase class="mb-4"/>
        <mortgage/>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import PropertyInfo from "@/components/PropertyInfo.vue"
import Purchase from "@/components/Purchase.vue"
import Mortgage from "@/components/Mortgage.vue"

export default {
  components: {
    PropertyInfo,
    Purchase,
    Mortgage
  }
};
</script>