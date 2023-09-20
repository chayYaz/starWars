import React from 'react';
import { useState,useEffect } from 'react';
import { ListItem } from '../interfaces/ListItem';
interface MovieItemProps {
  info: ListItem
//its going to be an object with type:function
toggleFavorite: (idx:number) => void;
}

const MovieDetails: React.FC<MovieItemProps> = ({ info ,toggleFavorite}) => {
  const { 
    title,
    idx, 
    isFavorite,
    created,
    edited,
    opening_crawl,
    director,
    producer,
    release_date } = info;
    const [isFavoriteState, setIsFavorite] = useState(isFavorite);
    const handleToggleFavorite = () => {
      
      toggleFavorite(idx);
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
      <h3 >Summary: <br/>{opening_crawl}</h3>
      <p className='inlining'>
      <p>Director: {director}</p>
      <p>Producer: {producer}</p>
      </p>
      <h3>Release date: {release_date}</h3>
      <div>{isFavoriteState && <p className='heart'>♥️</p>}</div>
      <button onClick={handleToggleFavorite}>
  {isFavoriteState ? 'Remove from Favorites' : 'Add to Favorites'}
</button>
</div>
    </div>
  );
};

export default MovieDetails;
