import React, { useEffect, useState } from 'react'
import './Banner.css'
import axios from '../../../axios'
import { API_KEY } from '../../../Constants/constants'
import { imageUrl } from '../../../Constants/constants'

const Banner = () => {
  const [movie, setMovie] = useState()
  useEffect(() => {
    axios.get(`trending/all/week?api_key=${API_KEY}&language=en-US`).then((response)=>{
      console.log(response.data.results[0])
      setMovie(response.data.results[0])
    })
  }, [])
  
  return (
    <div style={{backgroundImage:`url(${movie ? imageUrl+movie.backdrop_path : ""})`}} className='banner'>
        <div className="banner_content">
            <div className="title">{movie ? movie.title : ""}</div>
            <div className="banner_buttons">
                <div className="button">Play</div>
                <div className="button">My List</div>
            </div>
            <div className="description">{movie ? movie.overview : ""}</div>
        </div>
        <div className="fade"></div>
    </div>
  )
}

export default Banner