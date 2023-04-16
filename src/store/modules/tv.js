import axios from "axios";

export default {
    namespaced: true,
    state:{
        path: 'https://api.themoviedb.org/3/tv/',
        tv: null
    },
    mutations:{
        getTvById(state, payload){
            state.tv = payload
        }
    },
    actions:{
        async getTvById({commit, state, rootState}, tvId){
            try {
                const res = await axios.get(`${state.path}${tvId}?api_key=${rootState.apiKey}&language=ru-RU&page=1`)
                console.log(res.data);
                commit('getTvById',  res.data)
            } catch (error) {
                console.error('Произошла ошибка при получении сериала', error);
            }
        }
    },
    getters: {}
}