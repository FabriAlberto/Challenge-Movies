import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Navigate } from 'react-router-dom';
import swal from '@sweetalert/with-react';
const ItemDetailContainer = ({addFavorite,favorites}) => {
  let token = localStorage.getItem('token');
  const [data, setData] = useState(null)
  let { id } = useParams();
  
  useEffect(() => {
    const get = `https://api.themoviedb.org/3/movie/${id}?api_key=13589c240c07d69f124e7d7cd3d4588f&language=es-ES`
    axios.get(get)
      .then(res => setData(res.data))
      .catch(err => swal(<h2>Hubo un error intentalo mas tarde</h2>))

  }, [id])
  let heart=favorites.some((el)=>el.id===data?.id);
  return (
    <>

      {!token && <Navigate replace to='/'></Navigate>}
      {!data ? 
      <div>
          LOADING...
      </div>
      :
      <div className=' container__detail  container__detail__1 row  ' >
        <img className='img__backg' src={`https://image.tmdb.org/t/p/w500/${data.poster_path}`} alt={data.title} ></img>
        <div className='container__detail container__detail__2 row'>
          <div className='cont__img__detail col-4' style={{ zIndex: '1' }}>
            <img className='img__detail' src={`https://image.tmdb.org/t/p/w500/${data.poster_path}`} alt={data.title}  ></img>
          </div>
          <div className=' cont__title col-4 d-flex flex-column text-light display-flex' style={{ zIndex: '1' }}>
            <div className='cont__title__date'>
              <h1> {data?.title}</h1>
              <div>
                <p>{data?.release_date}-</p> <p>{data?.runtime}mn</p>
              </div>
            </div>
            <div className='cont__overview__all'>
              <div className='cont__overview'>
                <p>{data?.overview}</p>
              </div>
            </div>

          </div>
          <div className='col-4  ' style={{ zIndex: '1' }}>
            <ul className='list__genres d-flex flex-wrap'>
              {data?.genres?.map((elem ,idx) => <li className='genres' key={idx}>{elem.name.toUpperCase()}</li>)}
            </ul>
            <div className='cont__button__detail'>
              <div className='button__detail'> <button onClick={()=>addFavorite(data)} className='favourite-btn'>
                {
                  !heart?<p>🤍Add favorites</p>:<p>💖Remove favorites</p>
                } </button> </div>
              <div className='button__detail'> </div>
              <div className='button__detail'> </div>
            </div>
          </div>

        </div>
      </div>
      
        
      }


    </>
  )
}

export default ItemDetailContainer