<template>
    <LoaderComponent v-if="store.loading"/>
    <div v-if="project" class="d-flex justify-content-center align-items-center container main-cont">
        <div class="card col-12">
            <h1 class="card-header text-center text-uppercase">{{ project.name }}</h1>
            <img :src="project.image" :alt="project.name">
            <div class="card-body">
                <p> Description: <span v-html="project.description"></span></p>
            </div>
            <div class="card-body">
                <div class="d-flex justify-content-between">
                    <div>
                        <ul class="list-unstyled">
                            <li>Technologies used:</li>
                            <li v-for="tec in project.technologies">
                                <span>{{ tec.name }}</span>
                            </li>
                        </ul>
                    </div>
                    <div v-if="project.type">
                        <span> Project type: {{ project.type.name }}</span>
                    </div>
                </div>
                <div class="card-body text-end">
                    <a :href="project.url" class="btn my-dark-bg my-light-text">View Code</a>
                </div>
            </div>

        </div>
    </div>
</template>

<script>
import axios from 'axios';
import { store } from '../data/store';
import LoaderComponent from '../components/LoaderComponent.vue';
export default {
    name: 'SingleProject',
    components:{
        LoaderComponent
    },
    data() {
        return {
            project: {},
            store
        }
    },
    methods: {
        getProject() {
            this.store.loading = true;
            axios.get(`${store.apiUrl}/projects/${this.$route.params.slug}`).then((res) => {
                if (res.data.success) {
                    console.log(res.data.results);
                    this.project = res.data.results;
                } else {
                    this.$router.push({ name: 'not-found' });
                }
            });
            this.store.loading = false;
        }
    },
    mounted() {
        this.getProject();
    }
}
</script>

<style lang="scss" scoped>
img {
    width: 100%;
    height: 50vh;
    object-fit: contain;
    margin: 5px;
}

.card {
    box-shadow: 7px 4px 35px 21px rgba(0, 0, 0, 0.1);
}
</style>