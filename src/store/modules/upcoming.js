import axios from 'axios'
export default {
    namespaced: true,
    state:{
        upcomingPath: 'https://api.themoviedb.org/3/movie/upcoming',
        upcoming: null
    },
    mutations:{
        getUpcoming(state, payload){
            state.upcoming = payload
        }
    },
    actions:{
        async getUpcoming({commit, state, rootState}){
            try {
                const res = await axios.get(`${state.upcomingPath}?api_key=${rootState.apiKey}&language=ru-RU&page=1`)
                const results = res.data.results
                commit('getUpcoming', results)
            } catch (error) {
                console.log(error);
            }
        }
    },
    getters: {
        getUpcomingArray: (state) => state.upcoming
    }
}