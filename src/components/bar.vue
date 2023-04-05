<template>
  <nav>
    <v-app-bar flat app>
      <v-app-bar-nav-icon class="grey--text" @click="drawer=!drawer"></v-app-bar-nav-icon>
      <v-app-bar-title class="text-uppercase grey--text">
        <span class="font-weight-light">Todo</span>
        <span>Ninja</span>
      </v-app-bar-title>
      <v-spacer></v-spacer>
      <v-btn text color="grey">
        <span>Sign Out</span>
        <v-icon right>mdi-exit-to-app</v-icon>
      </v-btn>
    </v-app-bar>

    <v-navigation-drawer
        app
        v-model="drawer"
        class="primary"
        expand-on
    >
      <v-list>
        <v-list-item v-for="lnk in links" :key="lnk.text" router :to="lnk.route">
          <v-list-item-action>
            <v-icon class="white--text">{{ lnk.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title class="white--text">{{ lnk.text }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

      </v-list>
    </v-navigation-drawer>

  </nav>
</template>


<script>
export default {
  name: "bar",
  data() {
    return {
      drawer: false,
      links: [
        {icon: 'mdi-view-dashboard', text: 'Dashboard', route: '/index'},
        {icon: 'mdi-folder', text: 'My Projects', route: '/project'},
        {icon: 'mdi-account-multiple', text: 'Team', route: '/team'}
      ]
    }
  }
}
</script>
<style>
</style>

