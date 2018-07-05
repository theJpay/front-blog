<template>
  <div>
    <p>I will display my blog articles here</p>
  </div>
</template>

<script>
export default {
  name: "Article",
  created() {
    this.$router.push("/home");
  }
};
</script>

<style scoped>
</style>