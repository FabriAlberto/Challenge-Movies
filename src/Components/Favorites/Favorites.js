import React, { useEffect, useState } from 'react'
import ItemListado from '../Peliculas/ItemListado'
import { Navigate } from 'react-router-dom';
const Favorites = ({addFavorite,favorites}) => {
    let token = localStorage.getItem('token');
  return (
    <>
    {!token ? <Navigate replace to='/' />

    :
    (
      
    favorites.length>0?
    <div className='favorites__container    d-flex flex-wrap'>
      {
    favorites.map((el)=>
    <ItemListado key={el.id} favorites={favorites} data={el} addFavorite={addFavorite}></ItemListado>)
      }
    </div>
    :
     <div className=''>
        no Hay Peliculas favoritas
     </div>
    )
    }

    </>
  )
}

export default Favorites