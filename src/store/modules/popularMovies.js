import axios from "axios";

export default {
    namespaced: true,
    state:{
        path: 'https://api.themoviedb.org/3/movie/popular?',
        popularMovies: null
    },
    mutations:{
        getPopular(state, payload){
            state.popularMovies = payload
        }
    },
    actions:{
        async getPopular({commit, state, rootState}, page = 1){
            try {
                const res = await axios.get(`${state.path}api_key=${rootState.apiKey}&language=ru-RU&page=${page}`)
                const data = res.data.results
                commit('getPopular', data)
            } catch (error) {
                console.error('Произошла ошибка при получении популярных фильмов', error);
            }
        }
    },
    getters: {}
}