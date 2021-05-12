<template>
  <v-sheet tile id="profile" color="primary">
    <v-list max-height="120px" dense class="pa-0" subheader>
      <v-list-item dark two-line class="mt-0 pb-0 pl-3 pt-4">
        <v-list-item-avatar class="ma-0" size="54">
          <img :src="loggedUser.imageProfile" />
        </v-list-item-avatar>

        <v-list-item-content class="pl-2">
          <v-list-item-title>{{
            isLogged ? 'Conta do Google Tasks' : 'Conta Local'
          }}</v-list-item-title>
          <v-list-item-subtitle v-if="isLogged">{{
            loggedUser.email
          }}</v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-sheet>
</template>

<script>
export default {
  name: 'DrawerProfile',

  props: {
    loggedUser: {
      type: Object,
      required: true
    },
    isLogged: {
      type: Boolean,
      default: false
    }
  }
}
</script>
