import MovieItem from "./MovieItem";
import MovieList from "./MovieList"
import MovieDetails from "./MovieDetails"
import { useState } from "react";
function App() {
  const sampleMoviesList = [
    {
      idx:0,
    title: 'Star Wars: A New Hope',
    opening_crawl: 'The Rebel Alliance makes a risky move to steal the plans for the Death Star, setting the stage for the epic saga to follow.',
    isFavorite: false, // You can set the initial favorite status as needed
    created:"hee",
    edited:"hee",
    director:"hee",
    producer:"hee",
    release_date:"hee"
  },
  {
    title: 'movie 3',
    idx:1,
    opening_crawl: 'The Rebel Alliance makes a risky move to steal the plans for the Death Star, setting the stage for the epic saga to follow.',
    isFavorite: false, // You can set the initial favorite status as needed
    created:"hee",
    edited:"hee",
    director:"hee",
    producer:"hee",
    release_date:"hee"
  },
  {
    title: 'movie 2',
    idx:2,
    opening_crawl: 'The Rebel Alliance makes a risky move to steal the plans for the Death Star, setting the stage for the epic saga to follow.',
    isFavorite: false, // You can set the initial favorite status as needed
    created:"hee",
    edited:"hee",
    director:"hee",
    producer:"hee",
    release_date:"hee"
  }
];
  const [items, setItems] = useState(sampleMoviesList);
  const [currentItem, setCurrentItem] = useState(sampleMoviesList[0]);
  const toggleItemFavorite = (title: String) => {
    setItems((prevItems) =>
      prevItems.map((item,idx) =>
        item.title === title ? { ...item, isFavorite: !item.isFavorite,id: idx} : item
      )
    );
    console.log(items);
  };
  
  const chooseCurrent = (idx:number) => {
    alert("pressedd "+idx)
    setCurrentItem(sampleMoviesList[idx]);
    console.log(items);
  };
  return (
    <div className="App">
      <header>
        <h1>My Favorite Movies</h1>
      </header>
      <main>
      <MovieList items={items} chooseCurrent={chooseCurrent}/>
      <MovieDetails info={currentItem} toggleFavorite={toggleItemFavorite}/>
      </main>
    </div>
  );
}

export default App;





