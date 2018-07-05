<template>
    <div>
      <div class="presentation">
        <vue-article :md="mdeditor" />
      </div>
      <div>
        <mavon-editor :value="text" language="en" style="height: 600px; width: 70%; margin: 0 auto;" @change="updateText($event)"></mavon-editor>
      </div>
      <div class="presentation">
        <vue-markdown :source="text"></vue-markdown>
      </div>
    </div>
</template>

<script>
import Article from "./Article";
import presentation from "../assets/articles/MdEditor.md";

export default {
  name: "MdEditor",
  components: {
    "vue-article": Article
  },
  data() {
    return {
      mdeditor: presentation,
      text: "# Voilà à quoi ressemble le markdown :\n## On peut faire des sous-titres\n### Des sous-sous-titres\n\nOn peut aussi | faire de | très jolis | tableaux !\n:--- | --- | :---: | ---:\nà gauche | aussi | centré | à droite"
    };
  },
  methods: {
    updateText(newText) {
      this.text = newText;
    }
  }
};
</script>

<style scoped>
</style>

