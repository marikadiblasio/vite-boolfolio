<template>
  <div class="container main-cont d-flex justify-content-center align-items-center">
    <div>
      <h1 class="my-text text-center">{{ title }}</h1>
      <div class="row justify-content-center gx-5">
        <div class="col-12 col-md-6 col-lg-3 my-5" v-for="project in projects" :key="project.id">
          <div class="card g-5 h-100">
            <div class="img-box">
              <img :src="project.image" :alt="project.name" class="img-fluid">
            </div>
            <h6 class="card-title text-uppercase pt-2 px-3">
              {{ project.name }}
            </h6>
            <div class="card-body">
              Description: <span v-html="project.description"></span>
            </div>
            <div class="card-body" v-if="project.type">
              Type: {{ project.type.name }}
            </div>
            <div class="card-body" v-if="project.technologies.length > 0">
              Technologies:
              <div v-for="tec in project.technologies">
                {{ tec.name }}
              </div>
            </div>
            <p class="card-text text-end pe-2 pb-2">
            <router-link :to="{name: 'single-project', params: {slug: project.slug} }" class="btn my-light-text my-dark-bg">Details</router-link>
          </p>
          </div>
        </div>
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
export default {
  name: 'ProjectList',
  data() {
    return {
      title: 'Projects',
      projects: [],
      currentPage: 1,
      lastPage: null,
    }
  },
  methods: {
    getData(n) {
      axios.get(`${store.apiUrl}/projects`, {
        params: {
          'page': n
        }
      }).then((res) => {
        this.projects = res.data.results.data;
        this.currentPage = res.data.results.current_page;
        this.lastPage = res.data.results.last_page;
        //console.log(this.lastPage);
      });
    }
  },
  mounted() {
    this.getData(1);
  }
}
</script>

<style lang="scss" scoped>
@use '../assets/styles/partials/variables' as *;

img,
.img-box {
  height: 200px;
  width: 100%;
  object-fit: cover;
}


</style>
