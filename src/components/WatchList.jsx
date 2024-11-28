import { useEffect, useState } from 'react';
import {GENRE_IDS_MAP} from '../constants'

function WatchList(){

    const [movieWatchList, setMovieWatchList] = useState([]);
    const [search, setSearch] = useState('')
    const [genreList, setGenreList] = useState(['All Genres', 'Action', 'Sci-Fi', 'Thriller']);
    const [currentGenre, setCurrentGenre] = useState('All Genres')

    useEffect(()=>{
        const movieFromLS = localStorage.getItem("movies");
        if(!movieFromLS) return;
        setMovieWatchList(JSON.parse(movieFromLS))
    }, [])

    const getGenreFromId = id => {return GENRE_IDS_MAP[id];};

    useEffect(() => {
        let gNamesArr = movieWatchList.map(movie => {
            return getGenreFromId(movie.genre_ids[0])
        });
        let uniqueGenres = new Set(gNamesArr);
        setGenreList(['All Genres', ...uniqueGenres])
    }, [movieWatchList])


    const handleAscRating = ()=>{
        const sortedAscArr = movieWatchList.sort((movie1, movie2)=> movie1.vote_average - movie2.vote_average);
        setMovieWatchList([...sortedAscArr])
    }
    const handleDscRating = ()=>{
        const sortedDscArr = movieWatchList.sort((movie1, movie2)=> movie2.vote_average - movie1.vote_average);
        setMovieWatchList([...sortedDscArr])
    }

    const handleSearch = (ev) => {
        const { value } = ev.target;
        setSearch(value);
        // setSearch(ev.target.value)
    }

    const handleGenreFilter = genre => {
        setCurrentGenre(genre)
    }

    return (
        <>
        <div className="flex justify-center m-4">
                {genreList.map((genre) => {
                    const isActive = currentGenre === genre;
                    const baseStyles = "flex justify-center items-center h-[3rem] w-[10rem] font-bold mx-4 text-white cursor-pointer rounded-lg";
                    const bgColor = isActive ? 'bg-blue-400' : 'bg-gray-600';
                    return <div onClick={() => handleGenreFilter(genre)} className={`${baseStyles} ${bgColor}`}>{genre}</div>
                })}
        </div>
        <div className="flex justify-center">
                <input
                    type="text"
                    value={search}
                    onChange={handleSearch}
                    placeholder="Search movies..."
                    className="h-[3rem] w-[18rem] bg-gray-200 p-4 border border-gray-400 rounded-xl"
                />
        </div>
        <div className='overflow-hidden border border-gray-700 text-slate-100'>
            <table className='w-full border-collapse border-white text-left'>
                <thead>
                    <tr className="">
                        <th className="p-6"> Name</th>
                        <th className=""><div className='flex'>
                            <i onClick={handleAscRating} className='hover:cursor-pointer mx-2'>&#11165;</i>
                            Rating
                            <i onClick={handleDscRating} className='hover:cursor-pointer'>&#11167;</i>
                            </div></th>
                        <th className=""><div className='flex'>Popularity</div></th>
                        <th className=""><div className='flex'>Genre</div></th>
                    </tr>
                </thead>
                <tbody className="divide-y divide-x-gray-100 border-gray-100">
                    {movieWatchList
                    .filter((movie) => {
                        if (currentGenre === 'All Genres') {
                            return true
                        } else {
                            return currentGenre === getGenreFromId(movie.genre_ids[0])
                        }
                    })
                    .filter((movie) => movie.title.toLowerCase().includes(search.toLowerCase()))                    
                    .map((movie)=>
                                <tr>
                                    <td key={movie.id} className='flex items-center px-6 py-4'>
                                        <img className='h-[6rem] w-[8rem] object-fit object-cover rounded-lg mr-3' src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}/>
                                        <div className='font-semibold font-serif'>{movie.title}</div>
                                    </td>
                                    <td>{movie.vote_average}</td>
                                    <td>{movie.popularity}</td>
                                    <td>{movie.genre_ids.map((genreId) => <div key={genreId}>{getGenreFromId(genreId)}</div>)}</td>
                                </tr>
                        )
                    }
                </tbody>
            </table>
        </div>
        </>
    )
}
export default WatchList;