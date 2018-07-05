<template>
    <div>
        <div class="presentation">
          <div v-for="(article,index) in summary.articles" :key="article.file" v-bind:class="{ line: index != summary.articles.length - 1}" class="article">
            <h1>{{ article.title }}</h1>
            <div class="date-space">
              <h5>{{ Date(article.date) }}</h5>
            </div>
            <div class="read-space">
              <h5 @click="goToArticle(article.file)" class="read">Read...</h5>
            </div>
            <div class="fix">

            </div>
          </div>
        </div>
    </div>
</template>

<script>
import summaryFile from "../assets/example/index.json";

export default {
  name: "Blogs",
  data() {
    return {
      summary: JSON.parse(JSON.stringify(summaryFile))
    };
  },
  methods: {
    goToArticle(route) {
      this.$router.push('blogs/'+route);
    }
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

