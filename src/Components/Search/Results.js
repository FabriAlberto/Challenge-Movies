import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import swal from '@sweetalert/with-react';
import ItemListado from '../Peliculas/ItemListado';
import { Navigate } from 'react-router-dom';
const Results = ({addFavorite,favorites}) => {
    
    /* let query= new URLSearchParams(window.location.search);
    let keyword=query.get('keyword'); */
    let {keyw}= useParams();
    let token = localStorage.getItem('token');
    const [movie, setMovie]=useState([]);

    useEffect( () => {
      let endPoint=`https://api.themoviedb.org/3/search/movie?api_key=13589c240c07d69f124e7d7cd3d4588f&language=es-ES&page=1&include_adult=false&query=${keyw}`     
      axios.get(endPoint)
      .then( res=> {

        const movies=res.data.results;
        setMovie(movies)
        movies.length===0&&swal(<h2>Tu busqueda no arrojo resultados</h2>);
      })
        .catch(err=>swal(<h2>error intentelo mastarde</h2>));
    },[keyw])

  return (
    <>
     {!token ? <Navigate replace to='/' />:
     <>
    <h2> Results of:{keyw.toUpperCase()}</h2>
    {movie.length===0&&<h3>Not results</h3>}
    <div className='container'>

    <div className='d-flex row justify-content-center'>
     {
      movie.map((mov) => <ItemListado key={mov.id} favorites={favorites} data={mov} addFavorite={addFavorite}></ItemListado>)
     }
    </div>
    </div>
    </>
     }
    </>
  )
}

export default Results