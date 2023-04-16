import axios from "axios";

export default {
    namespaced: true,
    state:{
        path: 'https://api.themoviedb.org/3/search/multi',
        searchData: null
    },
    mutations:{
        getSearchData(state, payload){
            state.searchData = payload
        },
        resetSearch(state){
            state.resetSearch = null
        }
    },
    actions:{
        async getSearchData({commit, state, rootState}, search){
            try {
                const res = await axios.get(`${state.path}?api_key=${rootState.apiKey}&language=ru-RU&page=1&query=${search}&include_adult=false`)
                const data = res.data.results
                commit('getSearchData',  data)
            } catch (error) {
                console.error('Произошла ошибка при получении фильма', error);
            }
        }
    },
    getters: {}
}