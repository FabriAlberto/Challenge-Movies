import React from 'react'
import { Link } from 'react-router-dom'
import Search from '../Search/Search'
const Header = ({cantFavorites}) => {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-dark ">
        <div className="container-fluid">
          <p className="navbar-brand text-light">AlkemyChallenge</p>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse d-xl-flex justify-content-between" id="navbarNav">
            <ul className="navbar-nav ">
              <Link to={'/'}> <li className="nav-item">
                <p className="nav-link active text-light" aria-current="page" >Home</p>
              </li></Link>
              <Link to={'/favorites'}> <li className="nav-item">
                <p className="nav-link text-light" >Favorites {cantFavorites>0&&<span class="badge text-bg-secondary">{cantFavorites}</span>}</p>
                
              </li></Link>
            </ul>
          <Search></Search>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Header