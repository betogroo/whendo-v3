<template>
  <div>
    <button-float class="mb-4" @action="goTo('About')"></button-float>
    <template v-if="tasks.length > 0">
      <v-expansion-panels flat tile accordion multiple>
        <v-expansion-panel v-for="(tasklist, i) in tasklists" :key="i">
          <v-expansion-panel-header class="pa-0" color="grey lighten-2">
            <template v-slot:actions>
              <v-icon class="icon">mdi-menu-right</v-icon>
            </template>
            <span class="header">{{ tasklist.title }}</span>
          </v-expansion-panel-header>
          <v-expansion-panel-content>
            <task
              v-for="task in getTasksByTaskList(tasklist.id)"
              :key="task.id"
              @checkItem="checkItem(task)"
              :task="task"
            />
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-expansion-panels>
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
export default {
  name: 'Tasks',

  components: {
    ButtonFloat,
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
<style lang="scss" scoped>
.v-expansion-panel-header {
  height: 28px;
  margin-top: 1px;
}
.v-expansion-panel--active
  > .v-expansion-panel-header--active
  .v-expansion-panel-header__icon:not(.v-expansion-panel-header__icon--disable-rotate)
  .v-icon {
  transform: rotate(90deg);
}

.icon {
  order: 0;
}
.header {
  order: 1;
}
</style>
