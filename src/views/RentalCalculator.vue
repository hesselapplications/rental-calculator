<template>
  <v-container fluid class="pa-0 fill-height">
    <v-row no-gutters class="fill-height">
      <!-- IMAGE -->
      <v-col
        v-if="$vuetify.breakpoint.mdAndUp"
        md="4"
        cols="12"
        class="secondary fill-height"
      >
        <v-row no-gutters align="center" justify="center" class="fill-height">
          <v-col cols="auto">
            <v-img
              class="mx-16 my-4"
              :src="require('../assets/sweet-home.svg')"
            ></v-img>
            <h1 class="text-center white--text">{{ address }}</h1>
            <h3 class="text-center white--text">{{ description }}</h3>
          </v-col>
        </v-row>
      </v-col>

      <!-- STEPS -->
      <v-col md="8" cols="12">
        <v-stepper
          v-model="currentStep"
          vertical
          non-linear
          class="elevation-0"
        >
          <template v-for="(step, index) in steps">
            <!-- STEP -->
            <v-stepper-step
              editable
              edit-icon="mdi-check"
              :complete="currentStep > index + 1"
              :step="index + 1"
              :key="`step-${index}`"
            >
              {{ step }}
            </v-stepper-step>

            <!-- STEP CONTENT -->
            <v-stepper-content :step="index + 1" :key="`content-${index}`">
              <!-- COMPONENT -->
              <component class="pt-2" :is="components[index]" />

              <!-- NEXT -->
              <v-btn
                v-if="index + 1 < steps.length"
                depressed
                color="primary"
                @click="currentStep++"
              >
                Next
              </v-btn>

              <!-- BACK -->
              <v-btn
                v-if="index > 0 && index + 1 != steps.length"
                text
                color="grey"
                class="ml-2"
                @click="currentStep--"
              >
                Back
              </v-btn>
            </v-stepper-content>
          </template>
        </v-stepper>
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
import { sync, get } from "vuex-pathify";
import _ from "lodash";

export default {
  components: {
    PropertyInfo,
    Purchase,
    LoanDetails,
    Income,
    Expenses,
    Results,
  },
  data() {
    return {
      steps: [
        "Property Info",
        "Purchase",
        "Loan Details",
        "Income",
        "Expenses",
        "Results",
      ],
      components: [
        "property-info",
        "purchase",
        "loan-details",
        "income",
        "expenses",
        "results",
      ],
    };
  },
  computed: {
    ...sync(["currentStep"]),
    ...get(["address", "description"]),
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