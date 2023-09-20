import React from 'react';
import { useState,useEffect } from 'react';
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
    
    <div className="movie-details margin10">
      <div>
      <h3 className="movie-title"> {title}</h3>
      <p className='inlining'>
      <p>Created: {created}</p>
      <p>Edited: {edited}</p>
      </p>
      <h3 >Summary: <br/>{openingCrawl}</h3>
      <p className='inlining'>
      <p>Director: {director}</p>
      <p>Producer: {producer}</p>
      </p>
      <h3>Release date: {releaseDate}</h3>
      <div>{isFavoriteState && <p className='heart'>♥️</p>}</div>
      <button onClick={handleToggleFavorite}>
  {isFavoriteState ? 'Remove from Favorites' : 'Add to Favorites'}
</button>
</div>
    </div>
  );
};

export default MovieDetails;
