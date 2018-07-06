<template>
    <div>
        <div class="presentation">
          <div v-for="(article,index) in summary" :key="article.file" v-bind:class="{ line: index != summary.length - 1}" class="article">
            <h1>{{ article.title }}</h1>
            <div class="date-space">
              <h5>{{ formatDate(article.date) }}</h5>
            </div>
            <div class="read-space">
              <h5 @click="goToArticle(article.link)" class="read">Read...</h5>
            </div>
            <div class="fix">
            </div>
          </div>
        </div>
    </div>
</template>

<script>
import { firestoreapp } from "../db";

export default {
  name: "Blogs",
  data() {
    return {
      summary: []
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
    goToArticle(route) {
      this.$router.push("blogs/" + route);
    }
  },
  created() {
    firestoreapp
      .collection("test")
      .orderBy("date", "desc")
      .get()
      .then(querySnapshot => {
        querySnapshot.forEach(doc => {
          this.summary.push(doc.data());
        });
      });
  }
};
</script>

<style scoped>
.line {
  border-bottom: solid 0.2rem black;
}

.article {
  padding: 4px auto;
  margin: 4px auto;
}

.date-space {
  width: 40%;
  float: left;
}

.read-space {
  width: 40%;
  float: left;
  text-align: right;
}

.read {
  display: inline-block;
  cursor: pointer;
}

.fix {
  clear: both;
}
</style>

