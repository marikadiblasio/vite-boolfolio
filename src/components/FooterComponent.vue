<template>
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
export default {
    name: 'FooterComponent'

}
</script>

<style lang="scss" scoped>
@use '../assets/styles/partials/variables' as *;

footer {
    position: fixed;
    height: 50px;
    bottom: 0;
    width: 100%;
}
</style>