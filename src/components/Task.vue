<template>
  <div>
    <v-list-item class="pl-0" :style="`border-left: 4px solid ${task.color}`">
      <v-list-item-action @click="checkItem()" class="d-flex ma-0 px-3">
        <v-icon
          >mdi-{{
            task.isDone ? 'checkbox-marked-outline' : 'checkbox-blank-outline'
          }}</v-icon
        >
      </v-list-item-action>
      <v-list-item-content
        @click="$router.push({ name: 'TaskView', params: { id: task.id } })"
        class="pa-0 pt-1"
        :class="
          task.isDone ? 'text-decoration-line-through text--disabled' : ''
        "
      >
        <v-list-item-title v-text="task.title"></v-list-item-title>
        <v-list-item-subtitle
          v-text="task.note"
          class="d-inline-block text-truncate"
          style="max-width: 250px"
        ></v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item>
    <v-divider></v-divider>
  </div>
</template>

<script>
export default {
  name: 'Task',

  props: {
    task: {
      type: Object,
      required: true
    }
  },

  methods: {
    checkItem() {
      this.$emit('checkItem')
    }
  }
}
</script>

<style scoped>
.v-list--two-line .v-list-item {
  min-height: auto;
}
</style>
