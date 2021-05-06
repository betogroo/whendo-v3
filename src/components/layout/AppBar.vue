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
    <v-navigation-drawer app v-model="drawer" temporary width="272">
      <div id="profile">
        <v-card color="primary" dark tile>
          <v-list dense class="ml-0 pt-0">
            <v-list-item two-line>
              <v-list-item-avatar size="48">
                <img :src="localAccount.imageProfile" />
              </v-list-item-avatar>

              <v-list-item-content>
                <v-list-item-title>{{ localAccount.name }}</v-list-item-title>
                <v-list-item-subtitle v-if="isLogged"
                  >Logged In</v-list-item-subtitle
                >
              </v-list-item-content>
            </v-list-item>
            <v-list-item class="justify-end pt-0">
              <v-icon @click="toggleOptions" dark medium
                >mdi-chevron-{{ toggleOptionsButton ? 'up' : 'down' }}</v-icon
              >
            </v-list-item>
          </v-list>
        </v-card>
      </div>
      <div id="drawer-menu">
        <v-list dense>
          <v-list-item-group v-model="selectedItem" color="primary">
            <v-list-item v-for="(item, i) in allTaskLists" :key="i">
              <v-list-item-icon>
                <v-icon v-text="item.icon"></v-icon>
              </v-list-item-icon>
              <v-list-item-content>
                <v-list-item-title v-text="item.text"></v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list-item-group>
        </v-list>
      </div>
    </v-navigation-drawer>
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
    toggleOptionsButton: 0,
    isLogged: 0,
    loggedUser: {
      name: 'Luiz Roberto Cintra',
      imageProfile: 'https://randomuser.me/api/portraits/men/81.jpg',
      email: 'luizRoberto@gmail.com'
    },
    localAccount: {
      name: 'Conta Local',
      imageProfile:
        'https://www.pngarts.com/files/10/Default-Profile-Picture-Download-PNG-Image.png'
    },
    drawer: true,
    navRightMenu: [
      { title: 'Ordenar' },
      { title: 'Desmarcar Tarefas Concluídas' },
      { title: 'Excluir Tarefas Concluídas' },
      { title: 'Esconder Tarefas Concluídas' },
      { title: 'Enviar' }
    ],
    selectedItem: 1,
    defaultItems: [
      { text: 'Todas as Tarefas', icon: 'mdi-calendar' },
      {
        text: 'Tarefas Finalizadas',
        icon: 'mdi-checkbox-marked-circle-outline'
      }
    ],
    taskLists: [{ text: 'Todas as Tarefas', icon: 'mdi-menu', border: 'red' }]
  }),

  methods: {
    toggleDrawer() {
      this.$emit('toggleDrawer')
    },
    toggleOptions() {
      this.toggleOptionsButton = !this.toggleOptionsButton
    }
  },

  computed: {
    allTaskLists() {
      const tasklists = [...this.defaultItems, ...this.taskLists]
      return tasklists
    }
  }
}
</script>

<style></style>
