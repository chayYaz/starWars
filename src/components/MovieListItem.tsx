import React from 'react';
import { useState } from 'react';
interface MovieListItemProps {
  info: {
    title: string;
    idx:number
  };
  chooseCurrent: (idx: number) => void;
}

const MovieListItem: React.FC<MovieListItemProps> = ({ info,chooseCurrent}) => {
  const { idx,title } = info;
  //this is so I can send index to choosecurrent
  const [index, setIndex] = useState(idx);
  return (
    <div className="movie-list-item" onClick={()=>chooseCurrent(index)}>
      <h3>{title}</h3>
    </div>
  );
};

export default MovieListItem;
