<template>
  <div>
    <img src="../assets/fgin-header.png" alt="Photo accueil" id="home-header">
    <h1 id="title-header" class="hidden-sm-and-down">The Blog of an IT student living in Norway</h1>
  </div>
</template>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  #home-header {
    height: 400px;
  }
  #title-header {
    position: absolute;
    top: 40%;
    left: 35%;
    transform: translate(-50%, -50%);
    color: white;
  }
</style>
