import {useState, useEffect} from "react"
import ShowCard from "./ShowCard";
import Pagination from "./Pagination";
import axios from "axios";

function TopRatedShows() {
    const [shows, setShows] = useState([]);
    const [pageNum, setPageNum] = useState(1);
    const [showWatchList, setShowWatchList] = useState([]);


    useEffect(()=>{
        axios.get(`https://api.themoviedb.org/3/tv/top_rated?language=en-US&page=1&api_key=0b3672133712b849bac02b5ad9d496f2`)
        .then((response) => {
            setShows(response.data.results);
        })
        .catch(e => console.log(e))
    },[])

    const handleNext = () => {
        setPageNum(pageNum+1)
    }
    const handlePrev = () => {
        if(pageNum !== 1){
            setPageNum(pageNum-1)
        }
    }
    const addShowToList = (showobj) => {
        const updatedShowList = [...showWatchList, showobj]
        setShowWatchList(updatedShowList);
        localStorage.setItem("shows", JSON.stringify(updatedShowList))
    }
    const removeShowFromList = (showobj) => {
        const alteredShowList = showWatchList.filter((show)=> show.id !== showobj.id)  
        setShowWatchList(alteredShowList);
        localStorage.setItem("shows", JSON.stringify(alteredShowList))
    }

    return(
        <div>
            <div className="text-3xl font-bold p-4 text-amber-300">
                <h2>&#9614; Top Rated Shows  </h2>
                <h3 className="text-xl mt-2"> Here are the top rated shows &#11162;</h3>
            </div>
            <div className="flex justify-evenly flex-wrap gap-4">
                {shows.map((showobj) => <ShowCard 
                showobj={showobj} 
                showWatchList={showWatchList} 
                addShowToList={addShowToList}
                removeShowFromList={removeShowFromList}
                />)}
            </div>
            <Pagination
                pageNumber={pageNum}
                handlePrevFn={handlePrev}
                handleNextFn={handleNext}
            />
        </div>
        
    );

}
export default TopRatedShows;