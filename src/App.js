import { Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './Components/Login';
import Listado from './Components/Peliculas/Listado'
import { Footer } from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import ItemDetailContainer from './Components/Peliculas/Detail/ItemDetailContainer';
import Results from './Components/Search/Results';
import Favorites from './Components/Favorites/Favorites';
import { useEffect,useState } from 'react';
function App() {

  

  const [favorites,setFavorites]=useState([])
    
  useEffect(()=>{
    const favsInLocal=JSON.parse(localStorage.getItem('favs'))
    favsInLocal!==null&&setFavorites(favsInLocal)
    
  },[]) 
  
  const favMovies = localStorage.getItem('favs');
  let tempMovie;
  favMovies===null ? tempMovie = [] : tempMovie = JSON.parse(favMovies);

  const addFavorite = (data) => {

    const comp=tempMovie.some(elem=>elem.id===data.id);

    if(comp){
      tempMovie=tempMovie.filter(elem=>elem.id!==data.id)
    }
    else{
      tempMovie.push(data);
    }
    setFavorites(tempMovie)
    localStorage.setItem('favs',JSON.stringify(tempMovie))
    console.log(tempMovie)
  }

  return (
    <>
      <Header cantFavorites={favorites.length}/>
      <div className='cont__app '>
        <Routes>
          <Route path='/' element={<Login></Login>} />
          <Route path='/Listado' element={<Listado favorites={favorites} addFavorite={addFavorite}></Listado>} />
          <Route path='/detail/:id' element={<ItemDetailContainer favorites={favorites} addFavorite={addFavorite}></ItemDetailContainer>} />
          <Route path='/results/:keyw' element={<Results  favorites={favorites} addFavorite={addFavorite}></Results>} />
          <Route path='/favorites' element={<Favorites favorites={favorites} addFavorite={addFavorite}></Favorites>}></Route>
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;
