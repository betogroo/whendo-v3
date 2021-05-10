<template>
  <div>
    <tasks-sort-bar></tasks-sort-bar>
    <button-float class="mb-4" @action="goTo('About')"></button-float>
    <h4 class="text-center font-weight-regular text--disabled">
      Nenhuma tarefa Adicionada
    </h4>
  </div>
</template>

<script>
import ButtonFloat from '@/components/layout/ButtonFloat.vue'
import TasksSortBar from '@/components/layout/widgets/TasksSortBar.vue'
export default {
  name: 'Tasks',

  components: {
    ButtonFloat, TasksSortBar
  },

  data: () => ({
    btnAddTask: false
  }),

  methods: {
    // tests
    goTo(routeName) {
      this.$router.push({ name: routeName })
    }
  }
}
</script>
