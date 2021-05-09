<template>
  <div>
    <v-sheet color="grey lighten-3"> Ordenar por</v-sheet>
    <div class="pt-2">
      <button-float class="mb-4" @action="goTo('About')"></button-float>
      <h1>Tasks</h1>
      <h3 class="text-center text--disabled">Nenhuma tarefa Adicionada</h3>
    </div>
  </div>
</template>

<script>
import ButtonFloat from '@/components/layout/ButtonFloat.vue'
export default {
  name: 'Tasks',

  components: {
    ButtonFloat
  },

  data: () => ({
    btnAddTask: false
  }),

  methods: {
    goTo(routeName) {
      this.$router.push({ name: routeName })
    }
  }
}
</script>
