
import {
    createStore
} from "vuex";
import upcoming from '@/store/modules/upcoming'
import popularMovies from '@/store/modules/popularMovies'
import popularTvs from '@/store/modules/popularTvs'
import topRated from '@/store/modules/topRated'
import movie from '@/store/modules/movie'
import tv from '@/store/modules/tv'
import actors from '@/store/modules/actors'
import searching from '@/store/modules/searching'
const store = createStore({
    state: {
        apiKey: '71cb2676f355bd5674fbe977b8b7fb4b',
        imgFullUrl: 'https://image.tmdb.org/t/p/original',
        imgUrl: 'https://image.tmdb.org/t/p/w500'
    },
    modules: {
        popularMovies, 
        upcoming,
        popularTvs,
        topRated,
        movie,
        tv,
        actors,
        searching
    },
    getters: {
        imgBackground: (state) => state.imgFullUrl,
        imgPoster: (state) => state.imgUrl,
    }
})

export default store