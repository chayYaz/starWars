
import { useState,useEffect } from "react";
import ApiService from "../services/ApiService";
import { toggleObjectInListLocalStorage,getFromLocalStorage } from '../utils/LocalStorage'
import "./App.css"
import { ListItem } from "../interfaces/ListItem";
import AppComponent from "./AppComponent";
//the logic of app
function App() {
  const [items, setItems] = useState<ListItem[]>([]);
  const [currentIdx, setCurrentIdx] = useState<number | null>(null);

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
    
      const numbersList = getFromLocalStorage('favorites') || [];

// Map each number to an object with isFavorite
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
    <AppComponent items={items} chooseCurrent={chooseCurrent} currentIdx={currentIdx} toggleItemFavorite={toggleItemFavorite}/>
  );
}

export default App;
