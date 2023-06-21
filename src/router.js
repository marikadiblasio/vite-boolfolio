import { createRouter, createWebHistory } from "vue-router";
//import UserDetails from './views/UserDetails'
// with
//const UserDetails = () => import('./views/UserDetails.vue')

// import HomePage from './pages/HomePage.vue';
const HomePage = () => import('./pages/HomePage.vue');
//import Contacts from './pages/Contacts.vue';
//const Contacts = () => import('./pages/Contacts.vue');
//import AboutUs from './pages/AboutUs.vue';
const AboutUs = () => import('./pages/AboutUs.vue');
//import ProjectList from './pages/ProjectList.vue';
const ProjectList =() => import('./pages/ProjectList.vue');
//import SingleProject from './pages/SingleProject.vue';
const SingleProject = () => import('./pages/SingleProject.vue');
//import NotFound from './pages/NotFound.vue';
const NotFound = () => import('./pages/NotFound.vue');
import ContactPage from './pages/ContactPage.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomePage
        },
        // {
        //     path: '/contacts',
        //     name: 'contacts',
        //     component: Contacts
        // },
        {
            path: '/about',
            name: 'about',
            component: AboutUs
        },
        {
            path: '/projects',
            name: 'projects',
            component: ProjectList
        },
        {
            path: '/contacts',
            name: 'contacts',
           component: ContactPage
        },
        {
            path: '/projects/:slug',
            name: 'single-project',
            component: SingleProject
        },
        {
            path: '/:pathMatch(.*)*',
            name: 'not-found',
            component: NotFound
        }
    ]
});

export {router};