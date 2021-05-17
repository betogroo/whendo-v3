<template>
  <v-list-item @click="viewTaskList(item)">
    <v-list-item-icon>
      <v-icon v-text="`mdi-${icon}`"></v-icon>
    </v-list-item-icon>
    <v-list-item-content>
      <v-list-item-title v-text="item.title"></v-list-item-title>
    </v-list-item-content>
    <v-list-item-action class="text-right pr-2">
      <v-list-item-subtitle>{{
        item.totalTasks && item.doneTasks
          ? `${item.doneTasks}/${item.totalTasks}`
          : item.totalTasks || item.doneTasks
      }}</v-list-item-subtitle>
    </v-list-item-action>
    <v-sheet :color="item.color" height="32" width="3"></v-sheet>
  </v-list-item>
</template>

<script>
export default {
  name: 'DrawerMenu',

  props: {
    route: {
      type: Object,
      required: true
    },
    item: {
      type: Object,
      required: true
    },
    icon: {
      type: String,
      default: 'menu'
    }
  },

  methods: {
    viewTaskList(item) {
      this.$router.push(this.route)
      this.$store.dispatch('setTitle', item.title)
    }
  }
}
</script>
