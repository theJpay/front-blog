<template>
  <div>
    <div class="presentation">
      <v-text-field
          label="Title of the article"
          color="secondary"
          v-model="title"
        >
      </v-text-field>
    </div>
    <div>
      <mavon-editor :value="article" language="en" style="height: 600px; width: 70%; margin: 0 auto; 
    z-index: 0;" :boxShadow="false" @change="updateText($event)"></mavon-editor>
    </div>
    <div class="presentation">
      <vue-markdown :source="article"></vue-markdown>
      <v-btn color="secondary" class="btn-send" @click.stop="dialog = true">Envoyer</v-btn>
    </div>
    <v-dialog
    v-model="dialog"
    max-width="290"
    hide-overlay
    class="elevation-24"
    >
      <v-card>
        <v-card-title class="headline">Envoyer l'article ?</v-card-title>
        <v-card-text v-if="article == '' || title == ''">
          Il manque un champ à l'article, ATTENTION !
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="green darken-1"
            flat="flat"
            @click="dialog = false"
          >
            Disagree
          </v-btn>
          <v-btn
            color="green darken-1"
            flat="flat"
            @click="upload(); dialog = false"
          >
            Agree
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import { firestoreapp } from "../db";
import template from "../assets/website/template.md";

export default {
  name: "Admin",
  data() {
    return {
      dialog: false,
      article: template,
      title: ""
    };
  },
  methods: {
    upload() {
      if (this.article != "" && this.title != "") {
        const today = Date.now();
        firestoreapp.collection("test").add({
          title: this.title,
          article: this.article,
          date: today,
          link: this.transform(this.title)
        });
      }
    },
    updateText(newText) {
      this.article = newText;
    },
    transform(text) {
      let res = text.toLowerCase();
      res = res.replace(/(é|è|ë|ê)/g, "e");
      res = res.replace(/(ô|ö)/g, "o");
      res = res.replace(/(à)/g, "a");
      res = res.replace(/(î|ï)/g, "i");
      res = res.replace(/(\W)/g, "-");
      return res;
    }
  }
};
</script>

<style scoped>
.btn-send {
  margin-top: 3rem;
}
</style>