<template lang="html">
    <nav class="navbar navbar-light bg-light sticky-top">
        <div class="d-flex justify-content-end ml-auto">
            <router-link class="nav-link active text-default" :to="'/works'">
                <h5>Works</h5>
            </router-link>
            <router-link class="nav-link text-default" :to="'/about'">
                <h5>About</h5>
            </router-link>
            <router-link class="nav-link text-default" :to="'/contacts'">
                <h5>Contacts</h5>
            </router-link>
        </div>
    </nav>
</template>

<script>
export default {
    name: 'MainMenu'
}
</script>

<style lang="css">
</style>
