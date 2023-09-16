import React, { useEffect, useState } from 'react'
import MovieListing from './../MovieListing/MovieListing';
// import moveApi from '../../common/apis/movieApi'
// import { APIKEY } from './../../common/apis/MovieApiKey';
import { useDispatch } from 'react-redux';
import {  fetchAsyncMovies , fetchAsyncShows } from '../../features/movies/movieSlice';
import {BsSearch} from 'react-icons/bs' 
import './Homes.scss'
const Home = () => {

  const [movieSearch,setMovieSearch] = useState("Harry")
  const [searchText , setSearchText] = useState("")

  const handleSubmit = (event)=>{
    if(searchText !== "" ){
        setMovieSearch(searchText)
      
    }
  }

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      handleSubmit()
    }
  };

  const dispatch = useDispatch()
  useEffect(()=>{
      dispatch(fetchAsyncMovies(movieSearch))
      dispatch(fetchAsyncShows())
  },[dispatch , movieSearch])
  return (
    <div>
      <div className='banner-img'></div>
      <div className='search-bar'>
        <input  type='text' placeholder='Search movies & shows'  onChange={(e)=>{setSearchText(e.target.value)}  } onKeyDown = {handleKeyPress}  />
        <button onClick={handleSubmit} ><BsSearch/></button>
      </div>
      <MovieListing/>
    </div>
  )
}

export default Home
