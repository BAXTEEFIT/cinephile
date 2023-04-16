<template lang="pug">
header.header
    nav.header-nav
        .container.header-nav-content
            router-link(to="/")
                img(src="./../assets/img/logo.svg", alt="")
            button.burger(@click="burger = !burger")
                img(src="./../assets/img/bars.svg", alt="alt")
            ul.header-nav-content-list(:class="{active: burger}")
                li(v-for="link in links" :key="link.url")
                    router-link(:to="link.url").header-nav-content-list__link {{ link.title }}
</template>
<script>
export default {
    data() {
        return {
            links: [
                {title: 'Главная', url: '/'},
                {title: 'Фильмы', url: '/films'},
                {title: 'Сериалы', url: '/serials'},
                {title: 'Поиск', url: '/search'},
            ],
            burger: false
        }
    },
}
</script>
<style lang="scss">
    
</style>