<template>
    <div>
        <h1>Markdown language presentation :</h1>
        <p>Markdown is a simplified form of tag languages such as html.
        </p>
        <mavon-editor language="en">{{ text }}</mavon-editor>
    </div>
</template>

<script>
export default {
  name: "MdEditor",
  data() {
    return {
      text: ""
    };
  }
};
</script>

<style scoped>
</style>

