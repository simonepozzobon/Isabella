<template>
<main-layout>
    <div class="container">
        <div class="row h-100 justify-content-center align-items-center">
            <div class="col text-center p-5">
                <h1 class="text-default">Ciao!</h1>
                <p class="pt-3 pb-5 text-default">
                    I’m an Art Director, based in Milan, who ranges from motion to graphic design.<br> If you think my work can benefit you, I'll be happy to talk to you.
                </p>
                <router-link :to="'/cv'" class="btn btn-primary">Download CV</router-link>
            </div>
        </div>
    </div>
</main-layout>
</template>
<script>
import MainLayout from '../layouts/MainLayout.vue'

export default {
    components: {
        MainLayout
    }
}
</script>
<style lang="scss" scoped>
.container {
    height: calc(100vh - 92px);
}
</style>
