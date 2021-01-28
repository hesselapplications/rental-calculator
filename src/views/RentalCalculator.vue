<template>
  <v-container>
    <v-row justify="center">
      <v-col xl="4" lg="6" md="8" sm="10" cols="12">
        <property-info class="my-4"></property-info>
        <purchase class="mb-4" />
        <loan-details class="mb-4" />
        <income class="mb-4" />
        <expenses />
      </v-col>
      <v-col xl="4" lg="6" md="8" sm="10" cols="12">
        <results class="mt-4"></results>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import PropertyInfo from "@/components/PropertyInfo.vue";
import Purchase from "@/components/Purchase.vue";
import LoanDetails from "@/components/LoanDetails.vue";
import Income from "@/components/Income.vue";
import Expenses from "@/components/Expenses.vue";
import Results from "@/components/Results.vue";
import _ from "lodash";

export default {
  components: {
    PropertyInfo,
    Purchase,
    LoanDetails,
    Income,
    Expenses,
    Results
  },
  created() {
    this.loadQueryParamsIntoStore();
    this.syncQueryParamsWithStore();
  },
  methods: {
    loadQueryParamsIntoStore() {
      for (const key in this.$route.query) {
        var value = this.$route.query[key];
        if (!isNaN(value)) {
          value = _.toFinite(value);
        } else if (value == "true" || value == "false") {
          value = value == "true";
        }

        this.$store.set(key, value);
      }
    },
    syncQueryParamsWithStore() {
      this.$store.subscribe((mutation) => {
        const key = mutation.type.replace("SET_", "").toLowerCase();
        const value = mutation.payload;

        var query = _.cloneDeep(this.$route.query);
        if (query[key] != value.toString()) {
          query[key] = value;
          this.$router.replace({ query: query });
        }
      });
    },
  },
};
</script>