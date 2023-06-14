<template>
   <div class="col-12 col-md-6 col-lg-4 my-5" >
          <div class="card h-100 w-100">
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
</template>

<script>
    export default {
        name: 'CardComponent',
        props: ['project'],
        data(){
            return{

            }
        }
        
    }
</script>

<style lang="scss" scoped>
img, .img-box {
  height: 200px;
  width: 100%;
  object-fit: cover;
  object-position: center;
}
</style>