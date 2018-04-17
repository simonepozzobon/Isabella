<template lang="html">
    <div id="main-menu">
        <nav class="navbar navbar-light bg-light">
            <div class="navbar-nav d-flex">
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
    </div>
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

<style lang="scss" scoped>
@import '~styles/custom-variables';
    #main-menu {
        > nav {
            position: fixed;
            top: 0;
            width: 100%;
            height: $nav-height;
            padding: 0;
            z-index: $nav-z-index;

            &.bg-inverse {
                background-color: $black;
            }

            > .navbar-nav {
                flex-direction: row;
                width: 100%;
                transition: $transition-base;

                > .nav-link {
                    padding: 0 $spacer 0 $spacer;

                    > h5 {
                        margin-bottom: 0;
                    }
                }

                @include media-breakpoint-down('xs') {
                    justify-content: center;
                    align-items: center;
                    transition: $transition-base;
                };

                @include media-breakpoint-up('xs') {
                    justify-content: flex-end;
                    padding-right: $spacer;
                    transition: $transition-base;
                };
            }
        }
    }
</style>
