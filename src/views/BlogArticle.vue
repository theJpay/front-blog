<template>
  <div class="presentation">
    <p>I will display my blog articles here</p>
  </div>
</template>

<script>

export default {
  name: "Article",
  data() {
    return {
      id: this.$route.params.id
    };
  }
};
</script>

<style scoped>
</style>