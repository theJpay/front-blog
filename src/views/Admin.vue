<template>
  <div>
      <div class="presentation">
        <v-text-field
            label="Titre de l'article"
            color="secondary"
            v-model="title"
          >
        </v-text-field>
      </div>
      <div>
        <mavon-editor :value="article" language="en" style="height: 600px; width: 70%; margin: 0 auto;" @change="updateText($event)"></mavon-editor>
      </div>
        <v-btn color="secondary">Envoyer</v-btn>
      <div class="presentation">
        <vue-markdown :source="article"></vue-markdown>
      </div>
    </div>
</template>

<script>
import { firestoreapp } from "../db";
import template from "../assets/website/template.md";

export default {
  name: "Admin",
  data() {
    return {
      article: template,
      title: ""
    };
  },
  methods: {
    upload() {},
    updateText(newText) {
      this.article = newText;
    }
  }
};
</script>

<style scoped>
</style>