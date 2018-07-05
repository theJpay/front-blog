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

<style scoped>
</style>