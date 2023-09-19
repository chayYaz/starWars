import React from 'react';
import MovieItem from './MovieItem';
interface ListItem {
    title: string;
    idx:number;
  };
interface ListToObjectProps {
  items: ListItem[];
  chooseCurrent: (idx: number) => void;
}

const ListToObject: React.FC<ListToObjectProps> = ({ items,chooseCurrent}) => {
 
  return (
    <div>
      {items.map((item) => (
        <MovieItem
        info={item} // Pass the sample movie object as the "movie" prop
       chooseCurrent={chooseCurrent}
      />
      ))}
    </div>
  );
};

export default ListToObject;
