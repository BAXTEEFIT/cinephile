<template lang="pug">
main.main
   ContentList(content="movie")
</template>
<script>
import ContentList from "@/components/ContentList.vue";
export default {
   components: {
      ContentList,
   },
};
</script>
<style lang="scss">
</style>