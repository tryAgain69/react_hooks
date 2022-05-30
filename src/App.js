import React , {useState} from 'react'
import Addmovie from './Components/AddMovie';
import {Data} from './Data';
import MovieList from './Components/MovieList';

function App() {
  const[movies,setMovies]=useState(Data);
  const addmv=(newMovie)=>{(setMovies([...movies,newMovie]))}
  const [search, setSearch] = useState("");
  return (
    <div className="App">
      <MovieList movies={movies}/>
      <Addmovie addmv={addmv}/>

    </div>
  );
}

export default App;
