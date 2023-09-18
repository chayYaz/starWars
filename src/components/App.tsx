import MovieItem from "./MovieItem";
function App() {
  const sampleMovie = {
    title: 'Star Wars: A New Hope',
    opening_crawl: 'The Rebel Alliance makes a risky move to steal the plans for the Death Star, setting the stage for the epic saga to follow.',
    isFavorite: false, // You can set the initial favorite status as needed
  };
  return (
    <div className="App">
      <header>
        <h1>My Favorite Movies</h1>
      </header>
      <main>
      <MovieItem
          info={sampleMovie} // Pass the sample movie object as the "movie" prop
          toggleFavorite={()=>alert("heyuyyy")}
        />
      </main>
    </div>
  );
}

export default App;





