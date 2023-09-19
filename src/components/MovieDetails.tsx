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
    
    <div className="movie-details">
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
