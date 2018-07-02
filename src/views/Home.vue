<template>
  <div>
    <div class="home-header">
      <img src="../assets/fgin-header.png" alt="Photo accueil" id="home-header" class="img-responsive">
      <h1 id="title-header-lg" class="hidden-sm-and-down">The Blog of an IT student living in Norway</h1>
      <h1 id="title-header-sm" class="hidden-md-and-up">The Blog of an IT student living in Norway</h1>
    </div>
    <div>
      <v-container grid-list-xl>
        <v-layout v-bind="binding">
          <v-flex>
            <v-card dark color="primary">
              <v-card-text>one</v-card-text>
            </v-card>
          </v-flex>
          <v-flex>
            <v-card dark color="secondary">
              <v-card-text>two</v-card-text>
            </v-card>
          </v-flex>
          <v-flex>
            <v-card dark color="accent">
              <v-card-text>three</v-card-text>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    </div>
  </div>
</template>

<script>

  import index from '../../example/index.json';

  export default {
    name: 'Home',
    data() {
      return {
        index: JSON.stringify(index)
      }
    },
    computed: {
      binding() {
        const binding = {}
        if (this.$vuetify.breakpoint.smAndDown) binding.column = true
        return binding
      }
    }
  }
</script>

<style scoped>
  .home-header {
    width: 100%;
    text-align: center;
    overflow: hidden;
  }

  #home-header {
    position: relative;
    left: 100%;
    margin-left: -200%;
  }

  #title-header-lg {
    position: absolute;
    top: 220px;
    left: 30%;
    transform: translate(-50%, -50%);
    color: white;
  }

  #title-header-sm {
    position: absolute;
    top: 180px;
    left: 50%;
    transform: translate(-50%, -50%);
    color: white;
  }
</style>