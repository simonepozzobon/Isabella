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
        toOpen: function(newC, old) {

        }
    },
    created() {
        this.$on('mouseOver', id => {
            if (id != this.current) {
                this.current = id

                if (!this.toOpen.includes(id)) {
                    this.toOpen.push(id)
                    this.$emit('animateIn', id)
                }
            }
        })

        this.$on('mouseLeave', id => {
            if (!this.toClose.includes(id)) {
                this.toClose.push(id)
            }

            if (this.toClose.length == 1) {
                this.$emit('animateOut', this.toClose[0])
                this.current = 0
            }
        })

        this.$on('animationInComplete', id => {
            if (this.toOpen.includes(id)) {
                var index = this.toOpen.indexOf(id)
                if (index > -1) {
                    this.toOpen.splice(index, 1)
                }

                for (var i = 0; i < this.toClose.length; i++) {
                    if (this.toClose[i] != this.current) {
                        this.$emit('animateOut', this.toClose[i])
                    }
                }
            }
        })

        this.$on('animationOutComplete', id => {
            if (this.toClose.includes(id)) {
                var index = this.toClose.indexOf(id)
                if (index > -1) {
                    this.toClose.splice(index, 1)
                }
            }
        })
    }
})

export default EventBus
