<template>
  <div class="container">
    <h1>{{ title }}</h1>
    <div class="row">
      <div class="col-12 col-md-6 col-lg-3" v-for="project in projects" :key="project.id">
        <div class="card my-3">
          <div class="img-box">
            <img :src="project.image" :alt="project.name" class="img-fluid">
          </div>
          <h6 class="card-title text-uppercase pt-2 px-3">
            {{ project.name }}
          </h6>
          <div class="card-body">
            Description: {{ project.description }}
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
    <nav aria-label="Page navigation example">
      <ul class="pagination">
        <li class="page-item"><button @click="getData(currentPage - 1)" class="page-link" :class="currentPage === 1 ? 'disabled' : ''">Previous</button></li>
        <li class="page-item" v-for="n in lastPage"><button class="page-link" @click="getData(n)">{{ n }}</button></li>
        <li class="page-item"><button @click="getData(currentPage + 1)" class="page-link" :class="currentPage === lastPage ? 'disabled' : ''">Next</button></li>
      </ul>
    </nav>
  </div>
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
img,
.img-box {
  height: 200px;
  width: 100%;
  object-fit: cover;
}
</style>