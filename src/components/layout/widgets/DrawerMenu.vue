<template>
  <div id="drawer-menu">
    <v-list dense class="pt-1">
      <v-list-item-group v-model="selectedItem">
        <v-list-item v-for="(item, i) in items" :key="`${i}_${item.text}`">
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
</template>

<script>
export default {
  name: 'DrawerMenu',

  props: {
    items: {
      type: Array,
      required: true
    }
  },

  data: () => ({
    selectedItem: 0
  })
}
</script>

<style></style>
