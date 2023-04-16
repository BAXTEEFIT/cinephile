<template lang="pug">
.container
    .main-search
        input(type="text", v-model="value", autofocus).main-search__input
        .main-content-list(v-if="multiData")
            SearchContent(
                v-for="item in multiData" :key="item.id"
                :item="item"
            )
</template>
<script>
import { mapState } from "vuex";
import SearchContent from '@/components/SearchContent.vue'
export default {
    props: ['placeholder'],
    components: { SearchContent },
    data() {
        return {
            value: ''
        }
    },
    computed: {
        ...mapState('searching', ['searchData']),
        multiData(){
            if(this.value != ''){
                return this.searchData
            }
        }        
    },
    watch: {
        value(newVal){
            this.$store.dispatch('searching/getSearchData', this.value)
        }
    },
    unmounted() {
        this.$store.commit('searching/resetSearch')
    },
    
}
</script>
<style lang="scss">
    
</style>