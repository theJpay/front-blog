<template>
    <div>
      <div class="presentation">
        <vue-article :md="mdeditor" />
      </div>
      <div>
        <mavon-editor language="en" style="height: 600px; width: 70%; margin: 0 auto;">{{ text }}</mavon-editor>
      </div>
    </div>
</template>

<script>
import Article from "./Article";
import presentation from "../assets/MdEditor.md";

export default {
  name: "MdEditor",
  components: {
    "vue-article": Article
  },
  data() {
    return {
      mdeditor: presentation,
      text: ""
    };
  }
};
</script>

<style scoped>
</style>

