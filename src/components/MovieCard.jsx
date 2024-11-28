function MovieCard(props) {
    const { movieobj, addToWatchList,removeFromList, watchList} = props;
    const isMovieInList =(movieobj)=>{
        const result = watchList.some((movie)=> movie.id === movieobj.id);
        return result;
    }
    return (
        <div
            className="h-[40vh] w-[200px] bg-cover bg-center flex flex-col  rounded-2xl"
            style={{
                backgroundImage: `url(https://image.tmdb.org/t/p/original${movieobj.poster_path})`
            }}
        >
            <div className="text-white text-2xl rounded-2xl bg-gray-700/50  text-center w-full p-2">
                {movieobj.title}
            </div>
            {isMovieInList(movieobj) ? <div className="rounded-2xl bg-gray-700/50 flex items-center justify-center m-4 h-8 w-8"
            onClick={()=>removeFromList(movieobj)}
            role="button">
            &#9940;
            </div>:<div className="rounded-2xl bg-gray-700/50 flex items-center justify-center m-4 h-8 w-8"
            onClick={()=>addToWatchList(movieobj)}
            role="button">
            &#128525;
            </div>
            }
        </div>
    )
}

export default MovieCard