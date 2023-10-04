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
    <div className="btn text-black bg-white m-3 custom-hover-bg-yellow movie-item" onClick={()=>chooseCurrent(index)}>
      <button className="btn font-weight-bold">{title}</button>
    </div>
  );
};

export default MovieListItem;
