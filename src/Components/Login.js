import React from 'react'
import axios from 'axios'
import swal from '@sweetalert/with-react'
import { Navigate, useNavigate } from 'react-router-dom'


const Login = () => {
    const history = useNavigate();
    
    const handleSubmit=(e)=>{
    

        e.preventDefault()
    
        const email=e.target.email.value
        const password=e.target.password.value
        const regularEmail=/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        if(email=== '' || password===''){
            
            swal(<h2>no pueden haber campos vacios</h2>)
            return
        }
        else if(!regularEmail.test(email)){
          swal(<h2>ingrese correctamente su email</h2>)
          return
        }
    
        
        if(email!=='challenge@alkemy.org' || password    !=='react'){
            swal(<h2>Datos ingresados invalidos</h2>)
            return
    
        }
       
       axios
       .post('http://challenge-react.alkemy.org/',{email ,password})
       .then((res)=> {
        swal(<h2>INGRESASTE CORRECTAMENTE</h2>)
        const token=res.data.token
        localStorage.setItem('token',token );
         history('/Listado')
        })
       .catch((err)=>console.log(err))
        
    }
   
    let token = localStorage.getItem('token');
  return (
    <> 
     {token ? <Navigate replace to='/Listado'/>
     :
    <div className='container d-flex flex-column justify-content-center align-items-center my-5'>
        
        <h2 className='h2__login'>Login</h2>

        <form className=' form  d-flex flex-column col-5' onSubmit={handleSubmit} >
         <input className='my-2'
          type='text' 
          name='email' 
          placeholder='email'>

         </input>
         <input className='my-2' 
         type='password' 
         name='password'
         placeholder='contraseña'  >

         </input>
         <button className='btn btn-primary' type='submit'> Ingresar</button>
   
 
       </form>
       </div>
     }   
    </>
  )
}

export default Login