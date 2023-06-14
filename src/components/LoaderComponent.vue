<template>
    <div class="loader">
        <div class="fa-4x">
            <i class="fas fa-spinner fa-spin me-5"></i>
			<span>Loading...</span>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'LoaderComponent'
    }
</script>

<style lang="scss" scoped>
    .loader{
        position: absolute;
        top: 0;
        bottom: 0;
        right: 0;
        left: 0;
        background-color: rgba($color: #051e34, $alpha: 0.6);
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 1000;
    }
</style>