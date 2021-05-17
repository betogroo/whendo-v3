<template>
  <div>
    <button-float class="mb-4" @action="goTo('About')"></button-float>
    <template v-if="tasks.length > 0">
      <template v-if="tasklist === 'all'"> Tudo </template>
      <template v-if="tasklist === 'done'"> só finalizadas </template>

      <template v-else>
        <tasks-sort-bar></tasks-sort-bar>
        <v-list two-line class="pt-7">
          <task
            @checkItem="checkItem(task)"
            v-for="task in undoneTasks"
            :key="task.id"
            :task="task"
          />
          <v-sheet class="pa-1 ps-3" color="grey lighten-3">
            <h4 class="text--secondary font-weight-regular">CONCLUÍDO</h4>
          </v-sheet>
          <task
            @checkItem="checkItem(task)"
            v-for="task in doneTasks"
            :key="task.id"
            :task="task"
          />
        </v-list>
      </template>
    </template>
    <template v-if="!tasks.length">
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

  props: {
    tasklist: {
      type: [Number, String],
      required: true
    }
  },

  data: () => ({
    btnAddTask: false,
    tasks: [],
    tasklists: []
  }),

  methods: {
    checkItem(data) {
      const i = this.tasks.findIndex((item) => item.id === data.id)
      const isDone = !this.tasks[i].isDone
      this.$set(this.tasks, i, { ...this.tasks[i], isDone })
    },
    // tests
    goTo(routeName) {
      this.$router.push({ name: routeName })
    }
  },

  computed: {
    doneTasks() {
      return this.tasks.filter((item) => item.isDone === true)
    },
    undoneTasks() {
      return this.tasks.filter((item) => item.isDone === false)
    }
  },

  created() {
    TaskServices.getTasks(this.tasklist)
      .then((res) => {
        this.tasks = res.data
      })
      .catch((error) => {
        console.log(error)
      }),
      TaskServices.getTaskLists().then((res) => {
        this.tasklists = res.data
      })
  }
}
</script>
