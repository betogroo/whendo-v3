<template>
  <div>
    <tasks-sort-bar></tasks-sort-bar>
    <button-float class="mb-4" @action="goTo('About')"></button-float>
    <template v-if="tasks.length > 0">
      <v-list dense two-line>
        <task
          @checkItem="checkItem(task)"
          v-for="task in tasks"
          :key="task.id"
          :task="task"
        />
      </v-list>
    </template>
    <template v-else>
      <h4 class="text-center font-weight-regular text--disabled">
        Nenhuma tarefa Adicionada
      </h4>
    </template>
  </div>
</template>

<script>
import TaskServices from '@/services/TaskServices.js'
import Task from '@/components/Task.vue'
import ButtonFloat from '@/components/layout/ButtonFloat.vue'
import TasksSortBar from '@/components/layout/widgets/TasksSortBar.vue'
export default {
  name: 'Tasks',

  components: {
    ButtonFloat,
    TasksSortBar,
    Task
  },

  data: () => ({
    btnAddTask: false,
    tasks: []
  }),

  methods: {
    // tests
    goTo(routeName) {
      this.$router.push({ name: routeName })
    },
    checkItem(data) {
      const i = this.tasks.findIndex((item) => item.id === data.id)
      const isDone = !this.tasks[i].isDone
      this.$set(this.tasks, i, { ...this.tasks[i], isDone })
    }
  },

  created() {
    TaskServices.getTasks()
      .then((res) => {
        this.tasks = res.data
      })
      .catch((error) => {
        console.log(error)
      })
  }
}
</script>
