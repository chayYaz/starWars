import React from 'react';
import { useState,useEffect } from 'react';
import stars from './img.jpg';
import { MovieInfo } from '../interfaces/MovieInfo';
interface MovieDetailsProps {
  info: MovieInfo
//its going to be an object with type:function
toggleFavorite: (idx:number) => void;
}

const MovieDetails: React.FC<MovieDetailsProps> = ({ info ,toggleFavorite}) => {
  const { 
    title,
    idx, 
    isFavorite,
    created,
    edited,
    openingCrawl,
    director,
    producer,
    releaseDate } = info;
    //so it will show in current page
    const [isFavoriteState, setIsFavorite] = useState(isFavorite);
    const handleToggleFavorite = () => {
      //change in ui list and in local storage
      toggleFavorite(idx);
      //to make it show in current page
      setIsFavorite(prev=>!prev);
    };
    useEffect(() => {
      setIsFavorite(info.isFavorite);
    }, [info.isFavorite]);
  return (
    
    <div className="movie-details margin10 background-image">
       <h3 className="movie-title"> {title}</h3>
      <div className="flexing">
        <div className='movie-info'>
      <p className='inlining'>
      <p>Created: {created}</p>
      <p>Edited: {edited}</p>
      </p>
      <p >{openingCrawl}</p>
      <p className='inlining'>
     
      </p>
      <p>Release date: {releaseDate}</p>
      
      <div className='flexing'>{isFavoriteState && <p className='heart'>♥️</p>}
      <button  className="favorite-button" onClick={handleToggleFavorite}>
  {isFavoriteState ? 'Remove from Favorites' : 'Add to Favorites'}
</button>
</div>
</div>

</div>
    </div>
  );
};

export default MovieDetails;
