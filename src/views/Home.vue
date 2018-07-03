<template>
  <div>
    <div class="home-header">
      <img src="../assets/fgin-header.png" alt="Photo accueil" id="home-header" class="img-responsive">
      <h1 id="title-header-lg" class="hidden-sm-and-down">The blog of an IT student living in Norway</h1>
      <h1 id="title-header-sm" class="hidden-md-and-up">The blog of an IT student living in Norway</h1>
    </div>
    <div class="news">
      <h1 class="secondary--text">My most recent articles : </h1>
      <table>
        <thead>
        <tr>
          <th>size</th>
          <th>xs</th>
          <th>sm</th>
          <th>md</th>
          <th>lg</th>
          <th>xl</th>
        </tr>
        </thead>
        <tbody>
          <th>?</th>
          <td>{{this.$vuetify.breakpoint.xs}}</td>
          <td>{{this.$vuetify.breakpoint.sm}}</td>
          <td>{{this.$vuetify.breakpoint.md}}</td>
          <td>{{this.$vuetify.breakpoint.lg}}</td>
          <td>{{this.$vuetify.breakpoint.xl}}</td>
        </tbody>
      </table>
      <v-container grid-list-xl>
        <v-layout v-bind="binding">
          <v-flex md4 v-for="article in index.articles" v-bind:key="article.title">
            <div class="elevation-15 card">
              <div class="card-media">
                <img :src="require('./example/'+article.picture)" class="card-img">
              </div>
              <div class="card-txt">
                <h2>{{article.title}}</h2>
                <h3>{{formatDate(article.date)}}</h3>
              </div>
            </div>
          </v-flex>
        </v-layout>
      </v-container>
    </div>
  </div>
</template>

<script>
import index from "./example/index.json";

export default {
  name: "Home",
  data() {
    return {
      index: JSON.parse(JSON.stringify(index))
    };
  },
  methods: {
    formatDate(date) {
      const pad = s => {
        return s < 10 ? "0" + s : s;
      };
      const d = new Date(date);
      return [pad(d.getDate()), pad(d.getMonth() + 1), d.getFullYear()].join(
        "/"
      );
    },
    goTo(path) {
      this.$router.push(path);
    }
  },
  computed: {
    binding() {
      const binding = {};
      if (this.$vuetify.breakpoint.smAndDown) binding.column = true;
      return binding;
    }
  }
};
</script>

<style scoped>
.home-header {
  width: 100%;
  text-align: center;
  overflow: hidden;
}

#home-header {
  position: relative;
  left: 100%;
  margin-left: -200%;
}

#title-header-lg {
  position: absolute;
  top: 220px;
  left: 30%;
  transform: translate(-50%, -50%);
  color: white;
}

#title-header-sm {
  position: absolute;
  top: 180px;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
}

/* Card element for desktop - LG */
.card {
}

.card-media {
  overflow: hidden;
  height: 300px;

}

.card-img {
  position: relative;
  left: 100%;
  margin-left: -200%;
  top: 100%;
  margin-top: -200%;
  width: 100%;
}

.card-txt {
  text-align: left;
  padding-top: 10px;
  padding-bottom: 10px;
}

/* */

.news {
  margin-top: 20px;
}
</style>