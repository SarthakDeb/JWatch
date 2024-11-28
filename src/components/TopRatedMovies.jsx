import {useState, useEffect} from "react"
import MovieCard from "./MovieCard";
import Pagination from "./Pagination";
import axios from "axios";

function TopRatedMovies() {

    const [movies, setMovies] = useState([]);
    const[pageNo, setPageNo] = useState(1);
    const [watchList, setWatchList] = useState([]);

    useEffect (() => {
        axios.get(`https://api.themoviedb.org/3/movie/top_rated?language=en-US&api_key=0b3672133712b849bac02b5ad9d496f2&page=${pageNo}`)
        .then((response)=>{
            console.log(response.data.results)
            setMovies(response.data.results)
            
        })
        .catch(e => console.log(e))
        }, [pageNo]);
    
    const handleNext = () => {
        setPageNo(pageNo+1)
    }
    const handlePrev = () => {
        if(pageNo !== 1){
            setPageNo(pageNo-1)
        }
    }

    const addToWatchList = (movieobj) =>{
        const updatedList = [...watchList, movieobj];
        setWatchList(updatedList);
        localStorage.setItem("movies", JSON.stringify(updatedList))
    }
    const removeFromList = (movieobj)=>{
        const alteredList = watchList.filter((movie) => movie.id !== movieobj.id);
        setWatchList(alteredList);
        localStorage.setItem("movies", JSON.stringify(alteredList))

    }

    return(
        <div>
            <div className="text-3xl font-bold p-4 text-amber-300">
                <h2>&#9614; Top Rated Movies  </h2>
                <h3 className="text-xl mt-2"> Here are the top rated movies &#11162;</h3>
            </div>
            <div className="flex justify-evenly flex-wrap gap-4">
                {movies.map((movieobj) => <MovieCard 
                movieobj={movieobj} 
                addToWatchList={addToWatchList}
                removeFromList={removeFromList}
                watchList={watchList} 
                />)}
            </div>

            <Pagination
                pageNumber={pageNo}
                handlePrevFn={handlePrev}
                handleNextFn={handleNext}
            />


        </div>
    );
}
export default TopRatedMovies;