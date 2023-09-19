import React from 'react';
import { useState,useEffect } from 'react';
interface MovieItemProps {
  info: {
    title: string;
    idx:number;
    isFavorite: boolean;
    created:string;
    edited:string;
    opening_crawl:string;
    director:string;
    producer:string;
    release_date:string;
  };
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
    <div className="movie-item">

      <h3> title: {title}</h3>
      
      <h3>created: {created}</h3>
      <h3>edited: {edited}</h3>
      <h3>opening_crawl: {opening_crawl}</h3>
      <h3>director: {director}</h3>
      <h3>producer: {producer}</h3>
      <h3>release date: {release_date}</h3>
      <div>{isFavoriteState && <p>♥️</p>}</div>
      <button onClick={handleToggleFavorite}>
  {isFavoriteState ? 'Remove from Favorites' : 'Add to Favorites'}
</button>

    </div>
  );
};

export default MovieDetails;
