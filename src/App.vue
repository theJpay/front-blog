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
      <img src="./assets/logo-fgin.png" alt="Logo FrGINo" class="nav-logo">
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
.menu {
  margin-left: 40px;
}

.drawer-title {
  color: #424242;
}

.drawer-link {
  color: grey;
  text-decoration: none;
}

.drawer-link:hover {
  color: rgb(94, 94, 94);
}

.nav-logo {
  height: 80%;
  width: auto;
}

.nav-link {
  color: white;
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

<style>
#app {
  background: white;
}

@font-face {
  font-family: Poly;
  src: url("./assets/fonts/Poly-Regular.ttf");
}

.presentation {
  width: 50%;
  margin: 2rem auto;
  font-family: Poly;
  font-size: 1.2rem;
  text-align: justify;
}

.presentation h1 {
  font-family: Arial, Helvetica, sans-serif;
  color: black;
  font-size: 2.5rem;
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
}

.presentation h2 {
  font-family: Arial, Helvetica, sans-serif;
  color: black;
  font-size: 1.9rem;
  margin-top: 0.8rem;
  margin-bottom: 0.8rem;
}

.presentation h3 {
  font-family: Arial, Helvetica, sans-serif;
  color: black;
  margin-top: 0.8rem;
  margin-bottom: 0.8rem;
}

.presentation h4 {
  font-family: Arial, Helvetica, sans-serif;
  color: black;
  margin-top: 0.8rem;
  margin-bottom: 0.8rem;
}

.presentation h5 {
  font-family: Arial, Helvetica, sans-serif;
  color: black;
  margin-top: 0.8rem;
  margin-bottom: 0.8rem;
}

.presentation p {
  margin-top: 0.6rem;
  margin-bottom: 0.6rem;
}

.presentation iframe {
  height: 200px;
  width: 355.56px;
  border: none;
  position: relative;
  left: 50%;
  transform: translateX(-50%);
}

.presentation table {
  margin: 2rem auto;
  border-collapse: collapse;
}

.presentation table,
.presentation th,
.presentation td {
  padding: 4px;
  border: 1px solid black;
}

@media screen and (max-width: 960px) {
  .presentation {
    width: 90%;
  }

  .presentation iframe {
    height: auto;
    width: auto;
  }

  .presentation h1 {
    font-size: 2rem;
  }

  .presentation h2 {
    font-size: 1.6rem;
  }
}
</style>