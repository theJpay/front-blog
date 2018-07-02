<template>
  <v-app>
    <v-navigation-drawer v-model="drawer" fixed temporary width="200">
      <v-list>
        <v-list-tile>
          <v-list-tile-content>
            <v-list-tile-title>FrGINo</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-divider></v-divider>
        <v-list-tile>
          <v-list-tile-content>
            <v-list-tile-title @click="goTo('/')">Home</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile>
          <v-list-tile-content>
            <v-list-tile-title @click="goTo('/blogs')">Blogs</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile>
          <v-list-tile-content>
            <v-list-tile-title @click="goTo('/mdeditor')">.md Editor</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar dark color="secondary">
      <v-toolbar-side-icon class="hidden-md-and-up" @click.stop="drawer = !drawer"></v-toolbar-side-icon>

      <v-toolbar-title class="white--text">French Guy In Norway</v-toolbar-title>

      <v-toolbar-items class="hidden-sm-and-down menu">
        <v-btn flat @click="goTo('/')">Home</v-btn>
        <v-btn flat @click="goTo('/blogs')">Blogs</v-btn>
        <v-btn flat @click="goTo('/mdeditor')">Markdown Editor</v-btn>
      </v-toolbar-items>

      <v-spacer></v-spacer>
    </v-toolbar>
    <router-view/>
  </v-app>
</template>

<script>
  export default {
    name: 'App',
    data() {
      return {
        drawer: false
      }
    },
    methods: {
      goTo(path) {
        this.$router.push(path)
      }
    }
  }
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }

  #nav {
    padding: 30px;
  }

  #nav a {
    font-weight: bold;
    color: #2c3e50;
  }

  #nav a.router-link-exact-active {
    color: #42b983;
  }

  .menu {
    margin-left: 40px;
  }
</style>