<template lang="pug">
router-link.main-content-item(to="#")
   img.main-content-item__img(:src="imgFullUrl + item.poster_path", alt="alt")
   span.main-content-item__title {{ item.title || item.name }}
</template>
<script>
import { mapState } from "vuex";
export default {
   props: ["item", "content"],
   computed: {
      ...mapState(["imgFullUrl"]),
   },
};
</script>
<style lang="scss">
</style>