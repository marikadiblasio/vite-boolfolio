<template>
<HeaderComponent />
<router-view></router-view>
</template>

<script>
// import axios from 'axios';
import HeaderComponent from './components/HeaderComponent.vue';
export default {
  name: 'App',
  data() {
    return {
      
    }
  },
  components: {
    HeaderComponent
  },
  methods: {
    
  },
  mounted() {
    
  }
}
</script>

<style lang="scss" scoped>
@use './assets/styles/partials/variables' as *;
</style>