import axios from 'axios';
import React, {useState, useEffect} from 'react';

function ShowBanner() {

    const [banner, setBanner] = useState('');
    const [showTitle, setShowTitle] = useState('');

    useEffect(()=>{
        axios.get(`https://api.themoviedb.org/3/trending/tv/day?language=en-US&api_key=0b3672133712b849bac02b5ad9d496f2`)
        .then((response)=>{
            const firstShowData = response.data.results[3];
            const displayBanner = firstShowData.backdrop_path;
            const showName = firstShowData.name;
            setBanner(`https://image.tmdb.org/t/p/original${displayBanner}`);
            setShowTitle(showName)
        })
    })

    return(
        <div className="h-[20vh] md:h-[80vh] bg-cover flex items-end" 
        style={{backgroundImage:`url(${banner})`}}>

        <div className="text-amber-300 text-3xl text center w-full p-4 m-5 font-semibold">{showTitle}</div>

        </div>
    )


}
export default ShowBanner;