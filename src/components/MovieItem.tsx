import React from 'react';
import { useState } from 'react';
interface MovieItemProps {
  info: {
    title: string;
    idx:number
  };
  chooseCurrent: (idx: number) => void;
}

const MovieItem: React.FC<MovieItemProps> = ({ info,chooseCurrent}) => {
  const { idx,title } = info;
  const [index, setIndex] = useState(idx);
  return (
    <div className="movie-item" onClick={()=>chooseCurrent(index)}>
      <h3>{title}</h3>
      
    </div>
  );
};

export default MovieItem;
