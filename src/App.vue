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
            <span v-for="tec in project.technologies">
              {{ tec }}
            </span>
          </div>
        </div>
      </div>
    </div>
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
    getData() {
      axios.get(`${this.apiUrl}/projects`).then((res) => {
        console.log(res);
        this.projects = res.data.results.data;
        console.log(this.projects);
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