function ShowCard(props) {
    const { showobj, showWatchList, addShowToList, removeShowFromList } = props;

    const isShowInList =(showobj)=>{
        const res = showWatchList.some((show)=> show.id === showobj.id);
        return res;
    }
    return (
        <div
            className="h-[40vh] w-[200px] bg-cover bg-center flex flex-col  rounded-2xl"
            style={{
                backgroundImage: `url(https://image.tmdb.org/t/p/original${showobj.poster_path})`
            }}
        >
            <div className="text-white text-2xl rounded-2xl bg-gray-700/50  text-center w-full p-2">
                {showobj.name}
            </div>
            
             { isShowInList(showobj) ? <div className="rounded-2xl bg-gray-700/50 flex items-center justify-center m-4 h-8 w-8"
                onClick={()=>removeShowFromList(showobj)}
                role="button">
                &#9940;
                </div>:<div className="rounded-2xl bg-gray-700/50 flex items-center justify-center m-4 h-8 w-8"
                onClick={()=>addShowToList(showobj)}
                role="button">
                &#128525;
                </div>}
            
        </div>
    )
}

export default ShowCard;