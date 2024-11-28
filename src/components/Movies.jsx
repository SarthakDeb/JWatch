import {Link} from 'react-router-dom'
import Banner from './Banner'
import TopRatedMovies from './TopRatedMovies';
import MovieBanner from './MovieBanner';
function Movies(){

    return(
        <>
        <MovieBanner />
        <TopRatedMovies />
        </>
    )

}
export default Movies;