<template>
  <v-col class="text-center" v-bind="$attrs" v-on="$listeners">
    <div class="overline grey--text">{{ label }}</div>
    <div class="font-weight-bold d-flex justify-center align-center">
      <slot></slot>
    </div>
  </v-col>
</template>

<script>
export default {
  props: {
    label: String,
  },
};
</script>