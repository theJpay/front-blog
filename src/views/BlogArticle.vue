<template>
  <div class="presentation">
      <vue-markdown :source="article.article">
      </vue-markdown>
  </div>
</template>

<script>
import { firestoreapp } from "../db";

export default {
  name: "Article",
  data() {
    return {
      id: this.$route.params.id,
      article: ""
    };
  },
  created() {
    firestoreapp
      .collection("blog-articles")
      .where("file", "==", this.id)
      .get()
      .then(querySnapshot => {
        querySnapshot.forEach(doc => {
          this.article = doc.data();
        });
      });
  }
};
</script>

<style scoped>
</style>