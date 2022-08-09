import swal from '@sweetalert/with-react';
import { useNavigate, useParams } from "react-router-dom";

const Search =()=>{
  /*  const[keyw, setKeyw]=useState("") */
   const history = useNavigate();
   /* const search = useParams(); */
   /* const[place,setPlace]=useState("Escribe...") */
  

    const submitHandler = (e) => {
        e.preventDefault()
        const keyw=e.currentTarget.search.value.trim();
       if(keyw.length===0) {
           swal(<h2>Debes ingresar una palabra clave</h2>)  
       }else{
        history(`/results/${keyw}`)
        /* window.location.replace(`/results?keyword=${keyw}`) */
       }
        e.currentTarget.search.value='';
    }

    return(
        <>
        <form class="d-flex" role="search" onSubmit={submitHandler}>
        <input class="form-control me-2" type="search" placeholder="Search movie..." name="search" aria-label="Search"/>
        <button class="btn btn-outline-primary" type="submit">Search</button>
       </form>
        </>
    )
}

export default Search