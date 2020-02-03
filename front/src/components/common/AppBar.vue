<template>
  <div id="nav" class="animated fadeInDown delay-0.2s">
    <v-app-bar color="#FF3D00" dense >
      <v-app-bar-nav-icon></v-app-bar-nav-icon>

      <v-toolbar-title>GREAT</v-toolbar-title>
      <v-spacer></v-spacer>
      <router-link to="/">| index |</router-link>
      <router-link to="Main">| Main |</router-link>
      <router-link to="Authentication">| Auth |</router-link>
      <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>

      <v-menu left bottom>
        <template v-slot:activator="{ on }">
          <v-btn icon v-on="on">
            <v-icon>mdi-dots-vertical</v-icon>
          </v-btn>
        </template>

        <v-list>
          <v-list-item v-for="n in 5" :key="n" @click="() => {}">
            <v-list-item-title>Option {{ n }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </v-app-bar>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  }
};
</script>

<style>
#nav {
  z-index:100;
  position: fixed;
  width:100%;
}
</style>
