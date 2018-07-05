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
      text: "# This is what Markdown looks like :\n## You can do subtitles\n### Subsubtitles\n\nBut you can | also do | some pretty nice | tables !\n:--- | --- | :---: | ---:\nleft | again | centerd | right"
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

