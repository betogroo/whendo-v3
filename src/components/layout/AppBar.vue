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
            class="mx-2"
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
      <drawer-profile
        :isLogged="isLogged"
        :loggedUser="isLogged ? loggedUser : localUser"
      />
      <div id="drawer-menu">
        <v-list dense>
          <v-list-item-group v-model="selectedItem">
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
import DrawerProfile from '@/components/layout/widgets/DrawerProfile.vue'
export default {
  name: 'AppBar',

  components: {
    DrawerProfile
  },

  props: {
    title: {
      type: String,
      default: 'Todas as Tarefas'
    }
  },

  data: () => ({
    isLogged: false,
    loggedUser: {
      name: 'Luiz Roberto Cintra',
      imageProfile: 'https://randomuser.me/api/portraits/men/81.jpg',
      email: 'luizRoberto@gmail.com'
    },
    localUser: {
      name: 'Conta Local',
      imageProfile:
        'https://www.pngarts.com/files/10/Default-Profile-Picture-Download-PNG-Image.png',
      email: ''
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

<style scoped>
#profile {
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
}
</style>
