<template>
  <LoaderComponent v-if="store.loading" />
  <div v-else class="container main-cont d-flex justify-content-center align-items-center">
    <div>
      <h1 class="my-text text-center">{{ title }}</h1>
      <div class="row justify-content-center gx-5">
        <CardComponent v-for="project in projects" :key="project.id" :project="project"/>
      </div>
      <nav class="pag-nav">
        <ul class="pagination justify-content-center">
          <li class="page-item"><button @click="getData(currentPage - 1)" class="page-link"
              :class="currentPage === 1 ? 'disabled' : ''">Previous</button></li>
          <li class="page-item" v-for="n in lastPage"><button class="page-link"
              :class="n === currentPage ? 'active' : ''" @click="getData(n)">{{ n }}</button></li>
          <li class="page-item"><button @click="getData(currentPage + 1)" class="page-link"
              :class="currentPage === lastPage ? 'disabled' : ''">Next</button></li>
        </ul>
      </nav>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import { store } from '../data/store';
import CardComponent from '../components/CardComponent.vue';
import LoaderComponent from '../components/LoaderComponent.vue';
export default {
  name: 'ProjectList',
  data() {
    return {
      title: 'Projects',
      projects: [],
      currentPage: 1,
      lastPage: null,
      store
    }
  },
  components:{
    CardComponent,
    LoaderComponent
  },
  methods: {
    getData(n) {
      this.store.loading = true;
      axios.get(`${store.apiUrl}/projects`, {
        params: {
          'page': n
        }
      }).then((res) => {
        this.projects = res.data.results.data;
        this.currentPage = res.data.results.current_page;
        this.lastPage = res.data.results.last_page;
      });
      this.store.loading = false;
    }
  },
  mounted() {
    this.getData(1); 
  }
}
</script>

<style lang="scss" scoped>
@use '../assets/styles/partials/variables' as *;




</style>
