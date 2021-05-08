<template>
  <v-btn
    v-show="!visible"
    color="primary"
    dark
    fixed
    bottom
    right
    fab
    @click="action"
  >
    <v-icon>mdi-plus</v-icon>
  </v-btn>
</template>

<script>
export default {
  name: 'Buttonfloat',

  props: {
    visible: {
      type: Boolean,
      default: false
    }
  },

  methods: {
    action() {
      this.$emit('action')
    }
  }

}
</script>