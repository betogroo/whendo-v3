<template>
  <div 
    class="pt-2 grey lighten-2"
      v-touch="{
        left: () => swipe('Left'),
        right: () => swipe('Right'),
        up: () => swipe('Up'),
        down: () => swipe('Down')
      }"
      align="center"
      justify="center"
      style="height: 100%"
    >
      <button-float
        class="mb-4"
        @action="goTo('About')"
      ></button-float>
      <h1>
        Done Tasks
      </h1>
    <h3 class="text-center text--disabled">Nenhuma tarefa Adicionada</h3>
  </div>
</template>

<script>
import ButtonFloat from '@/components/layout/ButtonFloat.vue'
export default {
  name: 'DoneTasks',

  components: {
    ButtonFloat
  },

  data: () => ({
    btnAddTask: false,
    swipeDirection: 'None',
  }),

  methods: {
    goTo(routeName) {
      this.$router.push({ name: routeName })
    },
    swipe (direction) {
      this.swipeDirection = direction
      if (direction === 'Left') {
        this.$router.push({ name: 'Tasks'})
      }
    },
  }
}
</script>
