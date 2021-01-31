<template>
  <v-fab-transition v-if="shareSupported">
    <v-btn
      :small="$vuetify.breakpoint.smAndDown"
      color="secondary"
      fab
      dark
      bottom
      right
      fixed
      @click="share"
    >
      <v-icon class="pr-1">mdi-share-variant</v-icon>
    </v-btn>
  </v-fab-transition>
</template>

<script>
export default {
  props: {
    title: String,
  },
  computed: {
    shareSupported() {
      return navigator.share;
    },
  },
  methods: {
    share() {
      navigator.share({
        url: location.href,
        title: this.title,
      });
    },
  },
};
</script>