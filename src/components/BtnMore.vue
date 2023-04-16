<template lang="pug">
router-link(:to="page + id").more
    img(src="./../assets/img/bars.svg", alt="")
    span Подробнее
</template>
<script>
export default {
    props: {
        id: Number,
        page: {
            type: String,
            default: '/movie/'
        }
    }
}
</script>
<style lang="scss">
    .more{
        background: #149A03;
        border-radius: 10px;
        padding: 10px 15px;
        display: flex;
        gap: 15px;
        color: white;
        font-size: 20px;
    }
</style>