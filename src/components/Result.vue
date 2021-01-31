<template>
  <v-col lg="4" md="6" cols="12">
    <div class="overline grey--text">{{ label }}</div>
    <h4 class="font-weight-bold">
      <slot></slot>
    </h4>
  </v-col>
</template>

<script>
export default {
  props: {
    label: String,
  },
};
</script>
