import axios from 'axios';
import React, {useState, useEffect} from 'react';

function TopShowBanner(){
    const [bannerImg, setbannerImg] = useState('');
    const[title, setTitle] = useState('');

    useEffect (() => {
    axios.get(`https://api.themoviedb.org/3/tv/top_rated?language=en-US&page=1&api_key=0b3672133712b849bac02b5ad9d496f2`)
    .then((response)=>{
        console.log(response.data.results)
        const firstMovieMeta = response.data.results[0];
        const fmTitle = firstMovieMeta.title;
        const fmImage = firstMovieMeta.backdrop_path;
        setTitle(fmTitle);
        setbannerImg(`https://image.tmdb.org/t/p/original${fmImage}`);
    })
    .catch(e => console.log(e))
    }, []);

    return(
        <div className="h-[20vh] md:h-[80vh] bg-cover flex items-end" 
        style={{backgroundImage:`url(${bannerImg})`}}>

        <div className="text-amber-300 text-3xl text center w-full p-4 m-5 font-semibold">{title}</div>

        </div>
    )
}
export default TopShowBanner;