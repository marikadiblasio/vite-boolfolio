<template>
    <div>
        <header>
            <nav class="navbar navbar-expand-lg my-dark-bg">
                <div class="container">
                    <a class="navbar-brand text-white" href="#">Boolfolio</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                        aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                            <li class="nav-item" v-for="(link, index) in menu" :key="index">
                                <router-link :to="{ name: link.routeName }" class="nav-link text-white" aria-current="page"
                                    active-class="active">
                                    {{ link.routeLabel }}
                                </router-link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    </div>
</template>

<script>
export default {
    name: 'HeaderComponent',
    data() {
        return {
            menu: [
                {
                    routeLabel: 'Home',
                    routeName: 'home'
                },
                {
                    routeLabel: 'About Us',
                    routeName: 'about'
                },
                {
                    routeLabel: 'Projects',
                    routeName: 'projects'
                },
                {
                    routeLabel: 'Contact Us',
                    routeName: 'contacts'
                },
            ]
        }
    }
}
</script>

<style lang="scss" scoped>
@use '../assets/styles/partials/_variables.scss' as *;
header{
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 1000;
}
</style>