<template>
  <v-app>
    <app-bar />
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
import AppBar from '@/components/layout/AppBar.vue'
export default {
  name: 'App',

  components: {
    'app-bar': AppBar
  },

  data: () => ({
    //
  })
}
</script>
