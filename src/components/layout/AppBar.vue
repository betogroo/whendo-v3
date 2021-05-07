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
        :viewMode="viewMode"
        :isLogged="isLogged"
        :loggedUser="isLogged ? loggedUser : localUser"
        @toggleViewMode="toggleViewMode"
      />
      <div v-if="viewMode">
        <drawer-menu :items="allTaskLists" />
      </div>
      <div v-else>
        <drawer-menu :items="accounts" />
      </div>
    </v-navigation-drawer>
  </div>
</template>

<script>
import DrawerProfile from '@/components/layout/widgets/DrawerProfile.vue'
import DrawerMenu from '@/components/layout/widgets/DrawerMenu.vue'
export default {
  name: 'AppBar',

  components: {
    DrawerProfile,
    DrawerMenu
  },

  props: {
    title: {
      type: String,
      default: 'Todas as Tarefas'
    }
  },

  data: () => ({
    viewMode: true,
    isLogged: false,
    loggedUser: {
      id: '4021e344-ac09-46f8-9eb2-83009cd38568',
      name: 'Luiz Roberto Cintra',
      imageProfile: 'https://randomuser.me/api/portraits/men/81.jpg',
      email: 'luizRoberto@gmail.com',
      text: 'luizRoberto@gmail.com',
      icon: 'mdi-account'
    },
    localUser: {
      id: '5f9d3e62-947d-4464-9500-739de6b5cd51',
      name: 'Conta Local',
      imageProfile:
        'https://www.pngarts.com/files/10/Default-Profile-Picture-Download-PNG-Image.png',
      email: 'Conta Local',
      text: 'Conta Local',
      icon: 'mdi-account'
    },
    drawer: true,
    navRightMenu: [
      { title: 'Ordenar' },
      { title: 'Desmarcar Tarefas Concluídas' },
      { title: 'Excluir Tarefas Concluídas' },
      { title: 'Esconder Tarefas Concluídas' },
      { title: 'Enviar' }
    ],
    defaultMenuItems: [
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
    toggleViewMode() {
      this.viewMode = !this.viewMode
    }
  },

  computed: {
    allTaskLists() {
      const tasklists = [...this.defaultMenuItems, ...this.taskLists]
      return tasklists
    },
    accounts() {
      const accounts = [this.loggedUser, this.localUser]
      return accounts
    }
  }
}
</script>

<style scoped>
#profile {
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
}
</style>
