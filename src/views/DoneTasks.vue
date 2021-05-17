<template>
  <div>
    <button-float class="mb-4" @action="goTo('About')"></button-float>
    <template v-if="tasks.length > 0">
      <template v-for="tasklist in tasklists">
        <v-sheet :key="tasklist.id">
          {{ tasklist.title }}
        </v-sheet>
        <v-list :key="tasklist.id * 3.1416">
          <v-list-item
            v-for="task in getTasksByTaskList(tasklist.id)"
            :key="task.id"
            >{{ task.title }}
          </v-list-item>
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
    tasks: [],
    tasklists: []
  }),

  methods: {
    checkItem(data) {
      const i = this.tasks.findIndex((item) => item.id === data.id)
      const isDone = !this.tasks[i].isDone
      this.$set(this.tasks, i, { ...this.tasks[i], isDone })
    },
    getTasksByTaskList(tasklist) {
      const tasks = this.doneTasks.filter((i) => i.idTaskList === tasklist)
      return tasks
    },
    // tests
    goTo(routeName) {
      this.$router.push({ name: routeName })
    }
  },

  computed: {
    doneTasks() {
      return this.tasks.filter((item) => item.isDone === true)
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
