import Vue from 'vue'

const EventBus = new Vue({
    el: '#eventbus',
    data: function() {
        return {
            current: 0,
            toOpen: [],
            toClose: [],
        }
    },
    watch: {
        current: function(newCurrent) {
            this.$emit('mediaHoverCurrent', newCurrent)
        }
    },
    created() {
        this.$on('mouseOver', id => {
            this.current = id
        })

        this.$on('mouseLeave', id => {
            this.current = 0
        })

        this.$on('animationOutComplete', id => {
        })
    }
})

export default EventBus
