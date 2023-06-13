<template>
  <header>
    <nav class="navbar navbar-expand-lg my-dark-bg">
      <div class="container">
        <a class="navbar-brand" href="#">Boolfolio</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <a class="nav-link" aria-current="page" href="#">Home</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Projects</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </header>
  <div class="container main-cont d-flex justify-content-center align-items-center">
    <div>
    <h1 class="my-text text-center">{{ title }}</h1>
    <div class="row justify-content-center">
      <div class="col-12 col-md-6 col-lg-3 my-5" v-for="project in projects" :key="project.id">
        <div class="card gy-3 h-100">
          <div class="img-box">
            <img :src="project.image" :alt="project.name" class="img-fluid">
          </div>
          <h6 class="card-title text-uppercase pt-2 px-3">
            {{ project.name }}
          </h6>
          <div class="card-body" >
            Description: <span v-html="project.description"></span>
          </div>
          <div class="card-body" v-if="project.type">
            Type: {{ project.type }}
          </div>
          <div class="card-body" v-if="project.technologies.length > 0">
            Technologies:
            <div v-for="tec in project.technologies">
              {{ tec.name }}
            </div>
          </div>
        </div>
      </div>
    </div>
    <nav class="pag-nav">
      <ul class="pagination justify-content-center">
        <li class="page-item"><button @click="getData(currentPage - 1)" class="page-link"
            :class="currentPage === 1 ? 'disabled' : ''">Previous</button></li>
        <li class="page-item" v-for="n in lastPage"><button class="page-link" @click="getData(n)">{{ n }}</button></li>
        <li class="page-item"><button @click="getData(currentPage + 1)" class="page-link"
            :class="currentPage === lastPage ? 'disabled' : ''">Next</button></li>
      </ul>
    </nav>
  </div>
</div>
  <footer class="my-dark-bg">
    <div class="d-flex py-2 container justify-content-between align-items-center">
      <ul class="d-flex align-items-center list-unstyled m-0">
        <li class="pe-3"><a href="#"><i class="fa-brands fa-linkedin"></i></a></li>
        <li class="px-3"><a href="#"><i class="fa-brands fa-github"></i></a></li>
      </ul>
      <div class="px-3 my-light-text">
        <span>
          Copyright &copy; 2023 - All rights reserved
        </span>
      </div>
    </div>

  </footer>
</template>

<script>
import axios from 'axios';
export default {
  name: 'App',
  data() {
    return {
      title: 'Projects',
      projects: [],
      apiUrl: 'http://127.0.0.1:8000/api',
      currentPage: 1,
      lastPage: null,
    }
  },
  methods: {
    getData(n) {
      axios.get(`${this.apiUrl}/projects`, {
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
    this.getData();
  }
}
</script>

<style lang="scss" scoped>
@use './assets/styles/partials/variables' as *;
img,
.img-box {
  height: 200px;
  width: 100%;
  object-fit: cover;
}
a{
  color: $my-light;
  &:hover{
    color: white;
  }
}
footer{
  position: fixed;
  height: 50px;
  bottom: 0;
  width: 100%;
}
header{
  position: fixed;
  width: 100%;
  top: 0;
  height: 70px;
  z-index: 1000;
}
.container.main-cont{
  height: calc(100vh - 120px);
}
</style>