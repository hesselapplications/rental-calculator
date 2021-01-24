<template>
  <v-container>
    <v-row justify="center">
      <v-col cols="6">
        <property-info class="my-4"></property-info>
        <mortgage/>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import PropertyInfo from "@/components/PropertyInfo.vue"
import Mortgage from "@/components/Mortgage.vue"

export default {
  components: {
    PropertyInfo,
    Mortgage
  }
};
</script>