import React from 'react';

interface MovieItemProps {
  info: {
    title: string;
    opening_crawl: string;
    isFavorite: boolean;
  };
  //its going to be an object with type:function
  toggleFavorite: (info: { title: string; opening_crawl: string }) => void;
}

const MovieItem: React.FC<MovieItemProps> = ({ info, toggleFavorite }) => {
  const { title, opening_crawl, isFavorite } = info;

  const handleToggleFavorite = () => {
    toggleFavorite({ title, opening_crawl });
  };

  return (
    <div className="movie-item">
      <h3>{title}</h3>
      <p>{opening_crawl}</p>
      <button
        onClick={handleToggleFavorite}
        className={isFavorite ? 'favorite-button active' : 'favorite-button'}
      >
        {isFavorite ? 'Remove from Favorites' : 'Add to Favorites'}
      </button>
    </div>
  );
};

export default MovieItem;
