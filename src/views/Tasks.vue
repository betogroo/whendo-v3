<template>
  <div class="pt-2">
    <button-float
      @action="goTo('About')"
    ></button-float>
    <h3 class="text-center text--disabled">Nenhuma tarefa Adicionada</h3>
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
