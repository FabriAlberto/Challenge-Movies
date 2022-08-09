import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const ItemListado = ({ data,addFavorite ,favorites}) => {
    
  let heart=favorites.some((el)=>el.id===data.id);
     
   
  return (
    <>
      <div className=" cont__movie card m-3" style={{ width: '18rem' }}>
        
        <h6 className="card-text">{data?.original_title?.toUpperCase()}</h6>
        <div className='cont__img'>
        <img src={`https://image.tmdb.org/t/p/w500/${data?.poster_path}`} className="card-img-top" alt={data?.original_title} />
        <button onClick={()=>addFavorite(data) /* addFavorite */} className='favorite__btn'>
           {
             heart?<p>💖</p>:<p>🤍</p>
           }
           
           </button>
        </div>
        <div className='p-2'>
          <p className='overview'> {data?.overview?.substring(0,50)}...</p>
        </div>
        <Link to={`/detail/${data.id}`}> <button className='btn m-3 btn-dark'> view detail</button></Link>

      </div>
    </>
  )
}

export default ItemListado