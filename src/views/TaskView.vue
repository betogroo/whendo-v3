<template>
  <h1>
    {{ task.title }}
  </h1>
</template>

<script>
import TaskServices from '@/services/TaskServices.js'
export default {
  name: 'TaskView',

  props: {
    id: {
      type: Number,
      required: true
    }
  },

  data: () => ({
    task: {}
  }),

  methods: {
    getTask(id) {
      TaskServices.getTask(id).then((res) => {
        this.task = res.data
      })
    }
  },

  created() {
    this.getTask(this.id)
  }
}
</script>
