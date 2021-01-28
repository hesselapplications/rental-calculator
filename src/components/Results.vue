<template>
  <v-card>
    <v-card-title class="primary--text">Results</v-card-title>
    <v-card-text>
      <div>Down Payment Amount: {{ formatUSD(downPaymentAmount) }}</div>
      <div>
        Down Payment Percentage: {{ formatPercentage(downPaymentPercentage) }}
      </div>
      <div>Total Interest Paid: {{ formatUSD(totalInterestPaid) }}</div>
      <div>Mortgage Total: {{ formatUSD(mortgageTotal) }}</div>
      <div>Total Cost To Close: {{ formatUSD(totalCostToClose) }}</div>
      
      <v-divider class="my-2"></v-divider>

      <div>
        Principal + Interest: {{ formatUSD(monthlyPrincipalAndInterest) }} /
        month
      </div>
      <div>
        Mortgage Insurance: {{ formatUSD(monthlyMortgageInsurance) }} / month
      </div>
      <div>Property Taxes: {{ formatUSD(monthlyPropertyTaxes) }} / month</div>
      <div>Vacancy: {{ formatUSD(monthlyVacancy) }} / month</div>
      <div>
        Capital Expendatures: {{ formatUSD(monthlyCapitalExpendatures) }} /
        month
      </div>
      <div>
        Repairs and Maintenance: {{ formatUSD(monthlyMaintenance) }} / month
      </div>
      <div class="font-weight-bold">
        Total: {{ formatUSD(totalMonthlyExpenses) }} / month
      </div>

      <v-divider class="my-2"></v-divider>

      <div>Cash Flow: {{ formatUSD(monthlyCashFlow) }}</div>
      <div>Cap Rate: {{ formatPercentage(capRate) }}</div>
      <div>Cash On Cash Return: {{ formatPercentage(cashOnCashReturn) }}</div>
    </v-card-text>
  </v-card>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters([
      "downPaymentAmount",
      "downPaymentPercentage",
      "totalInterestPaid",
      "mortgageTotal",
      "totalCostToClose",
      "monthlyPrincipalAndInterest",
      "monthlyMortgageInsurance",
      "monthlyPropertyTaxes",
      "monthlyVacancy",
      "monthlyCapitalExpendatures",
      "monthlyMaintenance",
      "electricity",
      "gas",
      "waterAndSewer",
      "garbage",
      "hoa",
      "other",
      "totalMonthlyExpenses",
      "monthlyCashFlow",
      "capRate",
      "cashOnCashReturn"
    ]),
  },
  methods: {
    formatUSD(number) {
      const formatter = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
        minimumFractionDigits: 2,
      });

      return formatter.format(number);
    },
    formatPercentage(number) {
      const formatter = new Intl.NumberFormat("en-US", {
        style: "percent",
        minimumFractionDigits: 0,
        maximumFractionDigits: 3,
      });

      return formatter.format(number);
    },
  },
};
</script>
