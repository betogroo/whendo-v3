<template>
  <div>
    <v-app-bar app color="primary" dark flat>
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
      <v-sheet
        @click="toggleViewMode"
        class="d-flex flex-row-reverse pr-2"
        color="primary"
      >
        <v-icon medium dark>mdi-menu-{{ viewMode ? 'up' : 'down' }}</v-icon>
      </v-sheet>
      <v-list dense class="pt-1">
        <v-list-item-group v-model="selectedTaskList">
          <template v-if="viewMode">
            <drawer-menu
              v-for="item in defaultMenuItems"
              :key="item.id"
              :item="item"
              :icon="item.icon"
              :route="item.route"
            />
            <drawer-menu
              v-for="item in tasklists"
              :key="item.id"
              :item="item"
              :icon="item.icon"
              :route="{ name: 'TaskListTasks', params: { tasklist: item.id } }"
            />
          </template>
          <template v-else>
            <drawer-menu
              v-for="(item, i) in accounts"
              :key="`${i}`"
              :item="item"
              :icon="item.icon"
            />
            <v-divider></v-divider>
            <drawer-menu :item="addUser" />
          </template>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import TaskServices from '@/services/TaskServices.js'
import DrawerProfile from '@/components/layout/widgets/DrawerProfile.vue'
import DrawerMenu from '@/components/layout/widgets/DrawerMenu.vue'
export default {
  name: 'AppBar',

  components: {
    DrawerProfile,
    DrawerMenu
  },

  data: () => ({
    tasklist: [],
    viewMode: true,
    isLogged: true,
    btnAddTask: false,
    loggedUser: {
      id: '4021e344-ac09-46f8-9eb2-83009cd38568',
      imageProfile: 'https://randomuser.me/api/portraits/men/81.jpg',
      email: 'luizRoberto@gmail.com',
      title: 'luizRoberto@gmail.com',
      icon: 'account'
    },
    localUser: {
      id: '5f9d3e62-947d-4464-9500-739de6b5cd51',
      imageProfile:
        'https://www.pngarts.com/files/10/Default-Profile-Picture-Download-PNG-Image.png',
      email: 'Conta Local',
      title: 'Conta Local',
      icon: 'account'
    },
    addUser: {
      id: '5f9d3e6as947d-4464-9500-739de6b5cd51',
      name: 'Adicionar Nova Conta do Google',
      imageProfile:
        'https://www.pngarts.com/files/10/Default-Profile-Picture-Download-PNG-Image.png',
      email: 'Adicionar Nova Conta do Google',
      title: 'Adicionar Nova Conta do Google',
      icon: 'plus'
    },
    drawer: false,
    selectedTaskList: null,
    navRightMenu: [
      { title: 'Ordenar' },
      { title: 'Desmarcar Tarefas Concluídas' },
      { title: 'Excluir Tarefas Concluídas' },
      { title: 'Esconder Tarefas Concluídas' },
      { title: 'Enviar' }
    ],
    defaultMenuItems: [
      {
        id: 'all',
        title: 'Todas as Tarefas',
        icon: 'calendar',
        route: { name: 'Tasks', params: { tasklist: 'all' } },
        totalTasks: 18,
        doneTasks: 7
      },
      {
        id: 'done',
        title: 'Tarefas Finalizadas',
        icon: 'checkbox-marked-circle-outline',
        route: { name: 'DoneTasks', params: { tasklist: 'done' } },
        doneTasks: 7
      }
    ],
    tasklists: []
  }),

  methods: {
    toggleDrawer() {
      this.$emit('toggleDrawer')
    },
    toggleViewMode() {
      this.viewMode = !this.viewMode
    },
    getTaskLists() {
      TaskServices.getTaskLists().then((res) => {
        const tasklists = res.data
        this.tasklists = tasklists
      })
    }
  },

  watch: {
    selectedTaskList() {
      this.drawer = false
    }
  },

  computed: {
    ...mapState(['title']),
    accounts() {
      const accounts = [this.loggedUser, this.localUser]
      return accounts
    },
    allMenuItems() {
      const items = [...this.defaultMenuItems, ...this.tasklists]
      return items
    }
  },

  created() {
    this.getTaskLists()
  }
}
</script>
