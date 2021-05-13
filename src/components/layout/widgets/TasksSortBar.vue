<template>
  <v-dialog transition="fade-transition" max-width="600">
    <template v-slot:activator="{ on, attrs }">
      <v-sheet
        v-bind="attrs"
        v-on="on"
        class="task-sort-bar"
        color="grey lighten-2"
      >
        <h5 class="blue--text font-weight-regular">
          Ordernar por: {{ order.label }}
        </h5>
        <v-icon>mdi-menu-down</v-icon>
      </v-sheet>
    </template>
    <template v-slot:default="dialog">
      <v-card>
        <v-card-title>Ordenar por</v-card-title>
        <v-card-text>
          <v-radio-group v-model="radioOrder">
            <v-radio
              @change="
                setOrder(taskOrder)
                dialog.value = false
              "
              v-for="taskOrder in taskOrders"
              :key="taskOrder.label"
              :label="taskOrder.label"
              :value="taskOrder.value"
            ></v-radio>
          </v-radio-group>
        </v-card-text>
      </v-card>
    </template>
  </v-dialog>
</template>

<script>
export default {
  name: 'TasksSortBar',

  data: () => ({
    radioOrder: '',
    order: { label: 'Ordem', value: 'Ordem' },
    taskOrders: [
      { label: 'Ordem', value: 'Ordem' },
      { label: 'Prazo', value: 'Prazo' },
      { label: 'Urgente', value: 'Urgente' },
      { label: 'Alfabético', value: 'Alfabético' }
    ]
  }),

  methods: {
    setOrder(order) {
      this.order = order
    }
  }
}
</script>

<style lang="scss" scoped>
.task-sort-bar {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  width: 100%;
  height: 24px;
  padding-right: 5px;
  position: fixed;
  z-index: 5;
}
</style>
