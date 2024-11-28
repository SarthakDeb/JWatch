import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Shows from './components/Shows'
import WatchList from './components/WatchList'
import {Routes, Route} from 'react-router-dom'
import Movies from './components/Movies'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Navbar />
     <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/movies' element={<Movies />} />
      <Route path='/shows' element={<Shows />} />
      <Route path='/watchlist' element={<WatchList />} />
     </Routes>
    </>
  )
}

export default App
