<template>
  <v-container>
    <v-row justify="center">
      <v-col cols="4">
        <property-info class="my-4"></property-info>
        <purchase class="mb-4"/>
        <loan-details class="mb-4"/>
        <income class="mb-4"/>
        <expenses/>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import PropertyInfo from "@/components/PropertyInfo.vue"
import Purchase from "@/components/Purchase.vue"
import LoanDetails from "@/components/LoanDetails.vue"
import Income from "@/components/Income.vue"
import Expenses from "@/components/Expenses.vue"

export default {
  components: {
    PropertyInfo,
    Purchase,
    LoanDetails,
    Income,
    Expenses
  }
};
</script>