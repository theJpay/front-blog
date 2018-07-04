<template>
  <vue-markdown>{{ md }}</vue-markdown>
</template>

<script>
export default {
  name: "Article",
  props: {
    md: {
      type: String,
      required: true
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>