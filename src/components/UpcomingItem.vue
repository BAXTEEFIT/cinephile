<template lang="pug">
Transition(mode="out-in" name="upcoming")
    .upcoming-item(v-if="slideView == idx") 
        img(:src="imgBackground + movie.backdrop_path", alt="").upcoming-item__bg
        .upcoming-item-content 
            h1 {{movie.title}}
            p {{movie.overview}}
            BtnMore(:id="movie.id")
        .upcoming-item-next(@click="$emit('slideNext')")
            img(:src="imgPoster + next.backdrop_path", alt="")
            .upcoming-item-next-content
                span.next Следующий
                span.title {{next.title}}
                .line
</template>
<script>
import { mapGetters } from "vuex";
export default {
    props: {
        movie: Object,
        idx: Number,
        slideView: Number,
        next: Object
    },
    computed: {
        ...mapGetters(['imgBackground', 'imgPoster'])
    },
}
</script>
<style lang="scss">
    
</style>