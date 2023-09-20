import React from 'react';
import MovieListItem from './MovieListItem';
//it will get all the info but will type cast(change type)
interface ListItem {
    title: string;
    idx:number;
  };
  //this is not only a list
  interface ListProps {
  items: ListItem[];
  chooseCurrent: (idx: number) => void;
}

const MovieList: React.FC<ListProps> = ({ items,chooseCurrent}) => {
 
  return (
    <div className='movie-list'>
      {items.map((item) => (
        <MovieListItem
        info={item} 
       chooseCurrent={chooseCurrent}
      />
      ))}
    </div>
  );
};

export default MovieList;
