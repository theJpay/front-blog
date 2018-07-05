<template>
  <div>
    <div class="home-header">
      <h1 id="title-header">The blog of an IT student living in Norway</h1>
    </div>
    <div class="presentation">
      <vue-article :md="presentation" />
    </div>
  </div>
</template>

<script>
import Article from "./Article";
import home from "../assets/website/Home.md";

export default {
  name: "Home",
  components: {
    "vue-article": Article
  },
  data() {
    return {
      presentation: home
    };
  },
  methods: {
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
  height: 700px;
  background: url("../assets/home-header-small.jpg") center no-repeat;
  background-size: cover;
  background-attachment: fixed;
  text-align: center;
  overflow: hidden;
}

#home-header {
  position: relative;
  left: 100%;
  margin-left: -200%;
}

#title-header {
  background: black;
  border-radius: 2px;
  padding: 5px 5px;
  font-size: 3rem;
  font-style: normal;
  position: relative;
  width: 60%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: rgb(150, 150, 150);
  mix-blend-mode: darken;
}

@media screen and (max-width: 800px) {
  #title-header {
    font-size: 2rem;
    width: 95%;
  }
}
</style>