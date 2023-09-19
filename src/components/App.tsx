
import MovieList from "./MovieList"
import MovieDetails from "./MovieDetails"
import { useState,useEffect } from "react";
import ApiService from "../services/ApiService";
import { toggleObjectInListLocalStorage,getFromLocalStorage } from '../utils/LocalStorage'
import "./App.css"
function App() {
  
  interface ListItem {
    title: string;
    idx:number;
    isFavorite: boolean;
    created:string;
    edited:string;
    //the abstract
    opening_crawl:string;
    director:string;
    producer:string;
    release_date:string;
    };
  
useEffect(() => {
  ApiService.fetchMovies("https://swapi.dev/api/films/")
    .then((movies) => {
      const mappedItems = movies.map((item:any) => ({
        title: item.title,
        idx: item.idx,
        isFavorite:item.isFavorite,
        created:item.created,
        edited:item.edited,
        opening_crawl:item.opening_crawl,
        director:item.director,
        producer:item.producer,
        release_date:item.release_date
      }));
      
      // setItems(mappedItems);

      const numbersList = getFromLocalStorage('favorites') || [];

// Map each number to an object with isFavorite: true
      const mappedWithIsFavorite =mappedItems.map((mappedItem:ListItem) => ({
      ...mappedItem,
      isFavorite: numbersList.includes(mappedItem.idx)
      }));
      console.log(mappedWithIsFavorite);
      setItems(mappedWithIsFavorite);
      setCurrentIdx(0);
    })
    .catch((error:Error) => {
      console.error('Error fetching movie data:', error);
    });
}, []);

const [items, setItems] = useState<ListItem[]>([]);

const [currentIdx, setCurrentIdx] = useState<number | null>(null);

  const toggleItemFavorite = (idx: number) => {
    toggleObjectInListLocalStorage("favorites",idx);
    setItems((prevItems) =>
    prevItems.map((item) =>
      item.idx === idx ? { ...item, isFavorite: !item.isFavorite } : item
    )
  );
   
  };
  
  const chooseCurrent = (idx:number) => {
    setCurrentIdx(idx);
  };
  return (
    <div className="App">
      <header>
        <h1>My Favorite Movies</h1>
      </header>
      <main>
        <div className="app-body">
      <MovieList items={items} chooseCurrent={chooseCurrent}/>
      {currentIdx !== null ? (
        <MovieDetails info={items[currentIdx]} toggleFavorite={toggleItemFavorite} />
    ) : 
  (<p className="white-font">Loading</p>)}

      </div>
      </main>
    </div>
  );
}

export default App;
