
import { useState,useEffect } from "react";
import ApiService from "../services/ApiService";
import { toggleObjectInListLocalStorage,getFromLocalStorage } from '../utils/LocalStorage'
import "./App.css"
import { MovieInfo } from "../interfaces/MovieInfo";
import AppComponent from "./AppComponent";
//the logic of app
function App() {
  const [items, setItems] = useState<MovieInfo[]>([]);
  //curridx is null it is checked to be not null before used
  const [currentIdx, setCurrentIdx] = useState<number | null>(null);

useEffect(() => {
  ApiService.fetchInfo("https://swapi.dev/api/films/")
    .then((movies) => {
      //we want only certain parts of the all the info we got
      const mappedItems = movies.map((item:any) => ({
        title: item.title,
        idx: item.idx,
        isFavorite:item.isFavorite,
        created:item.created,
        edited:item.edited,
        openingCrawl:item.opening_crawl,
        director:item.director,
        producer:item.producer,
        releaseDate:item.release_date
      }));
    //Get idx of favorites
      const numbersFavoritList = getFromLocalStorage('favorites') || [];

    // Map each number to an object with isFavorite
      const mappedWithIsFavorite =mappedItems.map((mappedItem:MovieInfo) => ({
      ...mappedItem,
      //if in list of favorites
      isFavorite: numbersFavoritList.includes(mappedItem.idx)
      }));
      setItems(mappedWithIsFavorite);
      setCurrentIdx(0);
    })
    .catch((error:Error) => {
      console.error('Error fetching movie data:', error);
    });
}, []);

  //to use when pressing button for favorites
  const toggleItemFavorite = (idx: number) => {
    //toggle in local storage
    toggleObjectInListLocalStorage("favorites",idx);
    //toggle in ui
    setItems((prevItems) =>
    prevItems.map((item) =>
    //if right idx change isfavorite
      item.idx === idx ? { ...item, isFavorite: !item.isFavorite } : item
    )
  );
   
  };
  //current to show details of
  const chooseCurrent = (idx:number) => {
    setCurrentIdx(idx);
  };
  return (
    <AppComponent items={items} chooseCurrent={chooseCurrent} currentIdx={currentIdx} toggleItemFavorite={toggleItemFavorite}/>
  );
}

export default App;
