import React from 'react';
import MovieItem from './MovieItem';
interface ListItem {
    title: string;
    idx:number;
  };
  //this is not only a list
interface ListToObjectProps {
  items: ListItem[];
  chooseCurrent: (idx: number) => void;
}

const ListToObject: React.FC<ListToObjectProps> = ({ items,chooseCurrent}) => {
 
  return (
    <div className='movie-list'>
      {items.map((item) => (
        <MovieItem
        info={item} 
       chooseCurrent={chooseCurrent}
      />
      ))}
    </div>
  );
};

export default ListToObject;
