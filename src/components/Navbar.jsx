import {Link} from 'react-router-dom'
import Logo3 from '../assets/Logo3.png'
function Navbar(){
    return(
        <div className='flex space-x-5 items-center bg-black'>
        <Link to={'/'}>
            <img className='w-16 h-20 m-4 bg-contain' src={Logo3}/>
        </Link>
        <div className='text-blue-500 text-2xl font-bold space-x-8'>
        <Link  to={'/'}>Home</Link>
        <Link to={'/movies'}>Movies</Link>
        <Link to={'/shows'}>Shows</Link>
        <Link to={'/watchlist'}>WatchList</Link>
        </div>  
        </div>        

    )
}
export default Navbar;