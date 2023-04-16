<template lang="pug">
.main-info-content-actors
    .main-info-content-actor(
        v-for="actor in actors" :key="actor.id"
    )
        img(:src="imgUrl + actor.profile_path", alt="alt").main-info-content__img
        span.main-info-content__name {{ actor.name }}
</template>
<script>
import { mapActions, mapState } from "vuex";
export default {
    data() {
        return {
            actors: null
        }
    },
    props: ['type', 'id', 'count'],
    methods: {
        ...mapActions('actors', ['getActors'])
    },
    async mounted(){
        await this.getActors({id: this.id, type: this.type})
        this.actors = this.getCountActors
    },
    computed: {
        ...mapState(['imgUrl']),
        getCountActors(){
            const type = this.type == '/movie/' ? 'getMovieActors' : 'getTvActors'
            return this.$store.getters[`actors/${type}`](this.count)
        }
    },

}
</script>
<style lang="scss">
    
</style>