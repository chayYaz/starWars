
import { MovieInfo } from "../interfaces/MovieInfo";
import MovieList from "./MovieList"
import MovieDetails from "./MovieDetails"
interface AppComponentProps {
  items: MovieInfo[]; 
  currentIdx: number | null;
  chooseCurrent: (idx: number) => void;
  toggleItemFavorite: (idx: number) => void;
}
//this is for the returning children components of app
const AppComponent:React.FC<AppComponentProps> = ({ items, currentIdx, chooseCurrent, toggleItemFavorite }) => {
  return (

<div className="App ">
   
      <main>
        <div className="app-body container">
        <div className="nav">
        <div className="hamburger-menu" onClick={()=>{
    const movieList = document.querySelector('.movie-list');
    if (movieList) 
    movieList.classList.toggle('show-menu');
    
}}>
            <div className="bar"></div>
            <div className="bar"></div>
            <div className="bar"></div>
        </div>
       
    </div>
      <MovieList items={items} chooseCurrent={chooseCurrent}/>
      {currentIdx !== null ? (
        <MovieDetails info={items[currentIdx]} toggleFavorite={toggleItemFavorite} />
    ) : 
  (<p className="white-font">Loading...</p>)}
      </div>
      </main>
    </div>)}
  export default AppComponent