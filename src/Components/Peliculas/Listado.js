import React, { useEffect, useState } from 'react'
import { Navigate } from 'react-router-dom';
import axios from 'axios';
import ItemListado from './ItemListado';
import swal from '@sweetalert/with-react'
const Listado = ({addFavorite,favorites}) => {
  
  const [movie, setMovies] = useState([]);

  let token = localStorage.getItem('token');


  useEffect(() => {
    const endPoint = 'https://api.themoviedb.org/3/discover/movie?api_key=13589c240c07d69f124e7d7cd3d4588f&language=es-ES&sort_by=popularity.desc&include_adult=false&include_video=false&page=1'
    axios.get(endPoint)
      .then((res) => setMovies(res.data.results))
      .catch((err)=> swal(<h2>Hubo errores, vuelve a intentarlo mastarde</h2>))
  }, [])




  return (
    <>
      {!token ? <Navigate replace to='/' />

        :
         <div className='container d-flex justify-content-center'>

        <div className=' row d-flex align-items-center justify-content-center '>
          {
            movie?.map((mov) => <ItemListado favorites={favorites} addFavorite={addFavorite} key={mov.id} data={mov}></ItemListado>)
          }
        </div>
         </div>
      }
    </>
  )
}

export default Listado