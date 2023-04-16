<template lang="pug">
.main-info(:class="{active: selectedId != null}")
    img(src="@/assets/img/close.svg", alt="alt", @click="$emit('close')").main-info__close
    .main-info-block(v-if="selectedMovie")
        img(:src="imgFullUrl + selectedMovie.backdrop_path", alt="alt" v-if="selectedMovie.backdrop_path != null").main-info__img
        img(src="@/assets/img/no_image.png", alt="alt" v-else).main-info__img
        .main-info-content
            .main-info-content-block 
                h2 {{ selectedMovie.title || selectedMovie.name }}
                p.text {{ selectedMovie.overview != "" ? selectedMovie.overview : 'Описание пока не придумали)' }}
                p.date 
                    span {{ new Date(selectedMovie.release_date).getFullYear() ||  new Date(selectedMovie.last_air_date).getFullYear()}},
                    span(v-for="(genre, idx) in selectedMovie.genres" :key="genre.id") {{ genre.name }}
                        span(v-if="idx < selectedMovie.genres.length - 1") , 
                .actors
                    Actors(
                        :type="page"
                        :id="selectedMovie.id"
                        :count="4"
                    )
                BtnMore(
                    :page="page"
                    :id="selectedMovie.id"
                )
</template>
<script>
import { mapState } from "vuex";
export default {
    props: ['selectedId', 'selectedMovie', 'index', 'page'],
    computed: {
        ...mapState(['imgFullUrl'])
    },
}
</script>
<style lang="scss">
    
</style>