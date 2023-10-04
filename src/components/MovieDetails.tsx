import React from 'react';

import { useState,useEffect } from 'react';

import background from './starwarsbackground.jpg';
import { MovieInfo } from '../interfaces/MovieInfo';
interface MovieDetailsProps {
  info: MovieInfo
//its going to be an object with type:function
toggleFavorite: (idx:number) => void;
}


const MovieDetails: React.FC<MovieDetailsProps> = ({ info, toggleFavorite }) => {
  const { title, idx, isFavorite, created, edited, openingCrawl, director, producer, releaseDate } = info;

  const [isFavoriteState, setIsFavorite] = useState(isFavorite);

  const handleToggleFavorite = () => {
    toggleFavorite(idx);
    setIsFavorite((prev) => !prev);
  };

  useEffect(() => {
    setIsFavorite(info.isFavorite);
  }, [info.isFavorite]);

  return  (
    <div className="container mt-10">
      <h3 className="text-uppercase text-black title-with-border display-2 font-weight-bold mx-auto">{title}</h3>
      <div>
        <div>
          <p className="text-light light-font mx-auto">
            Created: {created} | Edited: {edited}
          </p>
          <div
            className="image-container mx-auto"
            style={{
              backgroundImage:`url(${background})`,
              backgroundSize: 'cover', // Adjust as needed
              backgroundPosition: 'center 40%', // Adjust as needed
              width: '100%', // Set the width of the container
              height: '180px', // Set the height of the container
            }}
          ></div>
        </div>
        <div className="mx-auto">
          <p className="text-light light-font">{openingCrawl}</p>
          <p className="text-light">Release date: {releaseDate}</p>
          <div className="d-flex align-items-center justify-content-center">
            {isFavoriteState && <p className="text-gold mr-2 heart">♥️</p>}
            <button
              className={`btn btn-warning favorite-button text-black ${isFavoriteState ? '' : ''}`}
              onClick={handleToggleFavorite}
            >
              {isFavoriteState ? 'Remove from Favorites' : 'Add to Favorites'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;
