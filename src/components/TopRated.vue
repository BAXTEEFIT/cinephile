<template lang="pug">
section.top-main
    h2.top-main__title ТОП
        span 10
    Swiper(
        :modules="modules"
        :space-between="23"
        navigation
        :breakpoints="swiperOpt.breakpoints"
    )
        SwiperSlide(
            v-for="(movie, idx) in topRated" :key="movie.id"
        ).top-main-item
            .top-main-info
                h2 {{ idx + 1 }}
                img(:src="imgPoster + movie.poster_path", alt="alt")
        SwiperSlide.main-media-item
            router-link(to="/films")
                img(src="@/assets/img/arrow.svg", alt="")
                span.all__films Все фильмы
</template>
<script>
import { mapActions, mapState, mapGetters } from "vuex";
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Navigation } from 'swiper'
import 'swiper/scss';
import 'swiper/scss/navigation';

export default {
    data() {
        return {
            modules: [Navigation],
            swiperOpt: {
                breakpoints: {
                    320: {
                        slidesPerView: 1
                    },
                    576: {
                        slidesPerView: 1
                    },
                    900: {
                        slidesPerView: 2
                    },
                    1200: {
                        slidesPerView: 3
                    },
                    1450: {
                        slidesPerView: 3
                    },
                }
            }
        }
    },
    components:{
        Swiper,
        SwiperSlide
    },
    methods: {
        ...mapActions('topRated', ['getPopular'])
    },
    computed: {
        ...mapState('topRated', ['topRated']),
        ...mapGetters(['imgPoster'])
    },
    mounted(){
        this.getPopular()
    }
}
</script>
<style lang="scss">
    
</style>