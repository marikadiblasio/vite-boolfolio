<template>
<HeaderComponent />
<main class="container">
<router-view></router-view>
</main>
<FooterComponent />
</template>

<script>
// import axios from 'axios';
import HeaderComponent from './components/HeaderComponent.vue';
import FooterComponent from './components/FooterComponent.vue';
export default {
  name: 'App',
  data() {
    return {
      
    }
  },
  components: {
    HeaderComponent,
    FooterComponent
  },
  methods: {
    
  },
  mounted() {
    
  }
}
</script>

<style lang="scss" scoped>
// @use './assets/styles/partials/variables' as *;
</style>