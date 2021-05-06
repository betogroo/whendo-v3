<template>
  <div>
    <v-app-bar app color="primary" dark>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title>{{ title }}</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>
      <v-menu left bottom>
        <template v-slot:activator="{ on, attrs }">
          <v-btn icon v-bind="attrs" v-on="on">
            <v-icon>mdi-dots-vertical</v-icon>
          </v-btn>
        </template>
        <v-list>
          <v-list-item
            v-for="item in navRightMenu"
            :key="item.title"
            @click="() => {}"
          >
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </v-app-bar>
    <v-navigation-drawer app v-model="drawer" temporary width="272"></v-navigation-drawer>
  </div>
</template>

<script>
export default {
  name: 'AppBar',

  props: {
    title: {
      type: String,
      default: 'Todas as Tarefas'
    }
  },

  data: () => ({
    drawer: false,
    navRightMenu: [
      { title: 'Ordenar' },
      { title: 'Desmarcar Tarefas Concluídas' },
      { title: 'Excluir Tarefas Concluídas' },
      { title: 'Esconder Tarefas Concluídas' },
      { title: 'Enviar' }
    ]
  }),

  methods: {
    toggleDrawer() {
      this.$emit('toggleDrawer')
    }
  }
}
</script>

<style></style>
