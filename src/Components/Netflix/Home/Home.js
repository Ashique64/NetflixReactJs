import React from 'react'
import Navbar from '../NavBar/Navbar'
import './Home.css'
import Banner from '../Banner/Banner'
import MovieList from '../MovieList/MovieList'
import { originals,actions } from '../../../urls'

const Home = () => {
  return (
    <div>
        <Navbar/>
        <Banner/>
        <MovieList url={originals}  title = "Netflix Origianls"/>
        <MovieList url={actions}  title = "Action"  isSmall />
    </div>
  )
}

export default Home