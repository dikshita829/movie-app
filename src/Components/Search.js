import React, { useState,useEffect } from 'react';
import axios from 'axios';
import './MovieCards.css'

const ReadMore = () => {
  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState([]);
  const [showFullOverview, setShowFullOverview] = useState(false);

  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  const handleSearch = async () => {
    try {
      const response = await axios.get(
        `https://api.themoviedb.org/3/search/movie?api_key=f4c5be3e57b9382e5a9bf8891558fff9&query=${query}`
      );
      setMovies(response.data.results.slice(0,10));
    } catch (error) {
      console.error('Error fetching movies:', error);
    }
  };
  const toggleOverview = () => {
    setShowFullOverview(!showFullOverview);
  };
  return (
   
       <>
       <div className="row  ">
        <div className=" col-sm-12  ">
        <h1 className='text-white text-center ' style={{marginBottom:"50px"}}>Movie collection</h1>
       <div className='d-flex justify-content-center align-items-center'>
       
      <input className="form-control me-2 w-50 border border-danger shadow" style={{textAlign:"center"}}
        type="text"
        value={query}
        onChange={handleInputChange}
        placeholder="Search for a movie..."
      />
      <button  className="btn btn-outline-danger text-white" onClick={handleSearch}>Search</button>


      </div>
      </div>
       
       {movies.map((movie) => (
         
         <div className="col-12 col-sm-6 col-md-4 col-lg-3"  style={{marginTop:"100px",paddingLeft:"100px"}}>
         <div className="movie-cards">
        
         <div key={movie.id} className="card">
           <img
             src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
             alt={movie.title}
           />
           <div className="card-body">
             
             <h5 className="card-title ">{movie.title}</h5>
             
             {movie && (
        <div>
          <h6>
          
            Average Rating: {showFullOverview ? movie.vote_average :`${movie.vote_average}`}
            </h6>
            <a href='#' onClick={toggleOverview}>
              {showFullOverview ? 'Read Less' : 'Read More'}
            </a>
             <p>Release Date: { showFullOverview ? movie.release_date : `${movie.release_date}`}</p>
          <p>
            {showFullOverview
              ? movie.overview
              : `${movie.overview.slice(0, 50)}...`}
            
          </p>
        </div>
      )}
 
           </div>
           
         </div>
         </div>
         </div>
        
           ))
 }  
  </div>
 
       </>
  )
}

export default ReadMore;
