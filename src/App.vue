<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      dark
    >
      <v-toolbar-title>Rental Calculator</v-toolbar-title>
    </v-app-bar>

    <v-main class="grey lighten-4">
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>

export default {
};
</script>
