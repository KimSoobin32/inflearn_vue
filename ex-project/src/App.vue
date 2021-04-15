<template>
  <v-app id="inspire">
    <v-navigation-drawer
      v-model="drawer"
      app
    >
      <!--  -->
      <v-list dense>
      <v-list-title router :to="{name: 'home'}">
      <v-list-tile-action>
        <!-- <v-icon>home</v-icon> -->
      </v-list-tile-action>
      <v-list-title-content>
        <v-list-title-title>Home</v-list-title-title>
      </v-list-title-content>
      </v-list-title>
      <v-list-title router :to="{name: 'login'}">
      <v-list-tile-action>
        <!-- <v-icon>contact_mail</v-icon> -->
      </v-list-tile-action>
      <v-list-title-content>
        <v-list-title-title >로그인</v-list-title-title>
      </v-list-title-content>
      </v-list-title>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar app>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

      <v-toolbar-title>Application</v-toolbar-title>
    </v-app-bar>
    <v-content>
      <router-view></router-view>
    </v-content>

    <v-main>
      <!--  -->
    </v-main>
  </v-app>
</template>

<script>
  export default {
    data: () => ({ drawer: null }),
  }
</script>