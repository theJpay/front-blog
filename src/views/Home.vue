<template>
  <div>
    <div class="home-header">
      <h1 id="title-header-lg" class="hidden-xs-only">The blog of an IT student living in Norway</h1>
      <h1 id="title-header-sm" class="hidden-sm-and-up">The blog of an IT student living in Norway</h1>
    </div>
    <div class="presentation">
      <vue-article :md="presentation" />
    </div>
  </div>
</template>

<script>
import Article from "./Article";

import index from "../assets/example/index.json";
import home from "../assets/articles/Home.md";

export default {
  name: "Home",
  components: {
    "vue-article": Article
  },
  data() {
    return {
      index: JSON.parse(JSON.stringify(index)),
      presentation: home
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

<style>
.home-header {
  height: 400px;
  background: url("../assets/fgin-header.png") center no-repeat;
  text-align: center;
  overflow: hidden;
}

#home-header {
  position: relative;
  left: 100%;
  margin-left: -200%;
}

#title-header-lg {
  font-family: Medio;
  font-size: 2.6rem;
  position: absolute;
  width: 50%;
  top: 15rem;
  left: 30%;
  transform: translate(-50%, -50%);
  color: white;
}

#title-header-sm {
  font-family: Medio;
  font-size: 2.1rem;
  position: relative;
  top: 120px;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
}
</style>