<template lang="pug">
section.main-media
  router-link.main-media__title(to="/films")
    span Фильмы
    img(src="@/assets/img/arrow.svg", alt="")
  Swiper(
    :modules="modules",
    :space-between="25",
    navigation,
    :breakpoints="swiperOpt.breakpoints"
  )
    SwiperSlide.main-media-item(
      v-for="(movie, idx) in popularMovies",
      :key="movie.id",
      @click="getMovie(movie, idx)"
    )
      img(:src="imgPoster + movie.poster_path", alt="")
    SwiperSlide.main-media-item
      router-link(to="/films")
        img(src="@/assets/img/arrow.svg", alt="")
        span.all__films Все фильмы
  InfoBlock(
    :selectedId="selectedId",
    :selectedMovie="selectedMovie",
    :index="index",
    @close="selectedId = null"
    page="/movie/"
  )
</template>
<script>
import InfoBlock from "@/components/InfoBlock.vue";
import { mapActions, mapState, mapGetters } from "vuex";
import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation } from "swiper";
import "swiper/scss";
import "swiper/scss/navigation";

export default {
  data() {
    return {
      selectedId: null,
      selectedMovie: null,
      index: null,
      modules: [Navigation],
      swiperOpt: {
        breakpoints: {
          320: {
            slidesPerView: 1,
          },
          576: {
            slidesPerView: 2,
          },
          900: {
            slidesPerView: 3,
          },
          1200: {
            slidesPerView: 4,
          },
          1450: {
            slidesPerView: 5,
          },
        },
      },
    };
  },
  components: {
    Swiper,
    SwiperSlide,
    InfoBlock,
  },
  methods: {
    ...mapActions("popularMovies", ["getPopular"]),
    ...mapActions("movie", ["getMovieById"]),
    async getMovie(movie, idx) {
      this.selectedId = movie.id;
      this.selectedMovie = null;
      this.index = idx;
      await this.getMovieById(this.selectedId);
      this.selectedMovie = this.movie;
      const list = document.querySelectorAll(".main-media-item");
      for (let i = 0; i < list.length; i++) {
        if (idx == i) {
          list[i].classList.add("active");
        }
        list[i].addEventListener("click", () => {
          for (let i = 0; i < list.length; i++) {
            list[i].classList.remove("active");
          }
        });
      }
      window.addEventListener("click", (e) => {
        if (e.target.classList.contains("main-info__close")) {
          for (let i = 0; i < list.length; i++) {
            list[i].classList.remove("active");
          }
        }
      });
    },
  },
  computed: {
    ...mapState("popularMovies", ["popularMovies"]),
    ...mapState("movie", ["movie"]),
    ...mapGetters(["imgPoster"]),
  },
  mounted() {
    this.getPopular();
  },
};
</script>
<style lang="scss">
</style>