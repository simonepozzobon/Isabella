<template lang="html">
    <nav class="navbar navbar-light bg-light sticky-top">
        <div class="d-flex justify-content-end ml-auto">
            <router-link class="nav-link active text-default" :to="'/works'" @click.native="clicked">
                <h5>Works</h5>
            </router-link>
            <router-link class="nav-link text-default" :to="'/about'" @click.native="clicked">
                <h5>About</h5>
            </router-link>
            <router-link class="nav-link text-default" :to="'/contacts'" @click.native="clicked">
                <h5>Contacts</h5>
            </router-link>
        </div>
    </nav>
</template>

<script>
import EventBus from '../eventbus'
export default {
    name: 'MainMenu',
    methods: {
        clicked: function(event) {
            EventBus.$emit('mouseDown', event)
        }
    },
}
</script>

<style lang="css">
</style>
