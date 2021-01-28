<template>
  <v-text-field
    v-model="model"
    v-bind="$attrs"
    v-on="$listeners"
    outlined
    suffix="%"
    type="number"
  ></v-text-field>
</template>

<script>
export default {
  props: {
    value: null,
  },
  data() {
    return {
      model: parseFloat((this.value * 100).toFixed(3)),
    };
  },
  watch: {
    model(model) {
      const rate = parseFloat((model / 100).toFixed(5));
      this.$emit("input", rate);
    },
  },
};
</script>
