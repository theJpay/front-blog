<template>
  <v-app>
    <v-navigation-drawer v-model="drawer" fixed temporary width="200">
      <v-list>
        <v-list-tile>
          <v-list-tile-content>
            <v-list-tile-title class="drawer-title">FrGINo</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-divider></v-divider>
        <v-list-tile>
          <v-list-tile-content>
            <router-link class="drawer-link" to="/home">Home</router-link>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile>
          <v-list-tile-content>
            <router-link class="drawer-link" to="/blogs">Blogs</router-link>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile>
          <v-list-tile-content>
            <router-link class="drawer-link" to="/mdeditor">.md Editor</router-link>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar dark color="secondary">
      <v-toolbar-side-icon class="hidden-md-and-up" @click.stop="drawer = !drawer"></v-toolbar-side-icon>

      <v-toolbar-title class="white--text">French Guy In Norway</v-toolbar-title>

      <v-toolbar-items class="hidden-sm-and-down menu">
        <v-btn flat @click="goTo('/home')"><router-link class="nav-link" to="/home">Home</router-link></v-btn>
        <v-btn flat @click="goTo('/blogs')"><router-link class="nav-link" to="/blogs">Blogs</router-link></v-btn>
        <v-btn flat @click="goTo('/mdeditor')"><router-link class="nav-link" to="/mdeditor">Markdown Editor</router-link></v-btn>
      </v-toolbar-items>

      <v-spacer></v-spacer>
    </v-toolbar>
    <router-view/>
    <div id="footer">
      <p>More information ? Please checkout my <a href="https://github.com/theJpay/front-blog">GitHub</a></p>
    </div>
  </v-app>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      drawer: false
    };
  },
  methods: {
    goTo(path) {
      this.$router.push(path);
    }
  }
};
</script>

<style>
@font-face {
  font-family: Alice;
  src: url("./assets/fonts/Alice-Regular.ttf");
}

@font-face {
  font-family: Shrikhand;
  src: url("./assets/fonts/Shrikhand-Regular.ttf");
}

@font-face {
  font-family: Galada;
  src: url("./assets/fonts/Galada-Regular.ttf");
}
#app {
  background: papayawhip;
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

.drawer-title {
  color: darkslategrey;
}

.drawer-link {
  color: lightslategrey;
  text-decoration: none;
}

.drawer-link:hover {
  color: #5d6c7c;
}

.nav-link {
  color: whitesmoke;
  text-decoration: none;
}

.nav-link.router-link-exact-active {
  color: gold;
}

#footer {
  margin: 5rem auto 2rem auto;
  padding-top: 2rem;
  width: 50%;
  height: 100%;
  text-align: center;
  border-top: solid lightslategrey 0.05rem;
}
</style>