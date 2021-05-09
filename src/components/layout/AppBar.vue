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
        <v-list-item-group>
          <template v-if="viewMode">
            <drawer-menu
              v-for="(tasklist, i) in allTaskLists"
              :key="`${i}_${tasklist.text}`"
              :item="tasklist"
            />
          </template>
          <template v-else>
            <drawer-menu
              v-for="(account, i) in accounts"
              :key="`${i}_${account.text}`"
              :item="account"
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
    tasklist: [],
    viewMode: true,
    isLogged: true,
    btnAddTask: false,
    loggedUser: {
      id: '4021e344-ac09-46f8-9eb2-83009cd38568',
      imageProfile: 'https://randomuser.me/api/portraits/men/81.jpg',
      email: 'luizRoberto@gmail.com',
      text: 'luizRoberto@gmail.com',
      icon: 'mdi-account'
    },
    localUser: {
      id: '5f9d3e62-947d-4464-9500-739de6b5cd51',
      imageProfile:
        'https://www.pngarts.com/files/10/Default-Profile-Picture-Download-PNG-Image.png',
      email: 'Conta Local',
      text: 'Conta Local',
      icon: 'mdi-account'
    },
    addUser: {
      id: '5f9d3e6as947d-4464-9500-739de6b5cd51',
      name: 'Adicionar Nova Conta do Google',
      imageProfile:
        'https://www.pngarts.com/files/10/Default-Profile-Picture-Download-PNG-Image.png',
      email: 'Adicionar Nova Conta do Google',
      text: 'Adicionar Nova Conta do Googlel',
      icon: 'mdi-plus'
    },
    drawer: false,
    navRightMenu: [
      { title: 'Ordenar' },
      { title: 'Desmarcar Tarefas Concluídas' },
      { title: 'Excluir Tarefas Concluídas' },
      { title: 'Esconder Tarefas Concluídas' },
      { title: 'Enviar' }
    ],
    defaultMenuItems: [
      {
        text: 'Todas as Tarefas',
        icon: 'mdi-calendar',
        totalTasks: 18,
        doneTasks: 7
      },
      {
        text: 'Tarefas Finalizadas',
        icon: 'mdi-checkbox-marked-circle-outline',
        doneTasks: 7
      }
    ],
    taskLists: [
      {
        text: 'Minhas Lista',
        icon: 'mdi-menu',
        color: 'red',
        totalTasks: 10,
        doneTasks: 3
      },
      {
        text: 'Compras',
        icon: 'mdi-menu',
        color: 'blue',
        totalTasks: 8,
        doneTasks: 4
      }
    ]
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
