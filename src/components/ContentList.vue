<template lang="pug">
.container
   .main-content
      h2.main-content__title {{ content == 'movie' ? 'Все Фильмы' : 'Все Сериалы' }}
      .main-content-list
         ContentItem(
            v-for="item in allContent",
            :key="item.id",
            :item="item",
            :content="content"
         )
   .loading(v-if="loading")
      .loading__spinner
</template>
<script>
import ContentItem from "@/components/ContentItem.vue";
import { mapState } from "vuex";

export default {
   data() {
      return {
         page: 1,
         loading: false,
         allContent: [],
      };
   },
   props: ["content"],
   components: { ContentItem },
   computed: {
      ...mapState("popularMovies", ["popularMovies"]),
      ...mapState("popularTvs", ["popularTvs"]),
   },
   methods: {
      async getContent() {
         if (!this.loading) {
            this.loading = true;
            let action =
               this.content == "movie"
                  ? "popularMovies/getPopular"
                  : "popularTvs/getPopular";
            await this.$store.dispatch(`${action}`, this.page);
            let data =
               this.content == "movie" ? this.popularMovies : this.popularTvs;
            this.allContent.push(...data);
            this.loading = false;
            this.page++;
         }
      },
   },
   mounted() {
      window.addEventListener('scroll', () => {
         if(window.scrollY + window.innerHeight >= document.body.scrollHeight){
            this.getContent();
         }
      })
      this.getContent();
   },
};
</script>
<style lang="scss">
</style>