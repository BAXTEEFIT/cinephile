import axios from "axios";

export default {
    namespaced: true,
    state:{
        path: 'https://api.themoviedb.org/3/movie/top_rated?',
        topRated: null
    },
    mutations:{
        getPopular(state, payload){
            state.topRated = payload
        }
    },
    actions:{
        async getPopular({commit, state, rootState}){
            try {
                const res = await axios.get(`${state.path}api_key=${rootState.apiKey}&language=ru-RU&page=1`)
                const data = res.data.results
                const top10 = []
                data.forEach(item => {
                    if(top10.length < 10) top10.push(item)
                })
                commit('getPopular', top10)
            } catch (error) {
                console.error('Произошла ошибка при получении лучших фильмов', error);
            }
        }
    },
    getters: {}
}