import React, { useEffect, useState } from 'react'
import './MovieList.css'
import axios from '../../../axios'
import {API_KEY, imageUrl} from '../../../Constants/constants'
import YouTube from 'react-youtube'

const MovieList = (props) => {
  const [movie, setMovie] = useState([])
  const [urlId, setUrlId] = useState()
  useEffect(() => {
    axios.get(props.url).then(response=>{
      setMovie(response.data.results)
    })
  }, )

  const opts ={
    height: '390',
    width: '100%',
    playerVars:{
      //https://developers.google.com/youtube/player_parameters
      autoplay:1,
    }
  }
  const movieTrailer = (id)=>{
    axios.get(`/movie/${id}/videos?api_key=${API_KEY}&language=en-US`).then(response=>{
      if(response.data.results.lenght!== 0){
        setUrlId(response.data.results[0])
      }else{
        console.log('Trailer Not Available')
      }
    })
  }
  
  return (
    <div className='row'>
        <h2 className='Movie_title'>{props.title}</h2>
        <div className="posters">
          {movie.map((obj)=>
            <img onClick={()=>movieTrailer(obj.id)} className={props.isSmall ? 'smallPoster' :'poster'} src={`${imageUrl+obj.backdrop_path}`} alt="Loding..." />
          )}
        </div>
        { urlId && <YouTube opts={opts} videoId = {urlId.key}/>}
    </div>
  )
}

export default MovieList