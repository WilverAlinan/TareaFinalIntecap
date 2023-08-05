import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

const Header = () => {
  return (
    <ContenedorHeader>
      <Menu>
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
              <nav class="navbar navbar-light bg-light">
                <div className="container">
                  <img src="https://www.jovenesprogramadores.cl/wp-content/uploads/2020/07/react.png" alt="" width="76" height="70" />
                </div>
              </nav>
              <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                  <li className="nav-item">
                    <NavLink className="nav-link active" aria-current="page" to='/'>Inicio</NavLink>
                  </li>
                  {/* <li className="nav-item">
                    <NavLink className="nav-link active" to='/blog'> Blog</NavLink>
                  </li> */}
                  <li className="nav-item">
                    <NavLink className="nav-link active" to='/formulario'>Formulario en Memoria</NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link active" to='/api-rick'>Rick & Morty</NavLink>

                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link active" to='/firebaseCrud'>CRUD Online</NavLink>
                    </li>
                  <li className="nav-item">
                    <NavLink className="nav-link active" to='/acerca-de'>Acerca de</NavLink>
                    
                  </li>
                </ul>
              </div>
            </div>
          </nav>
      </Menu>
    </ContenedorHeader>
  )
}

const ContenedorHeader = styled.header`
text-align: center;
margin-bottom: 25px;
margin-top: 15px;
`

const Titulo = styled.h1`
font-size: 26px;
margin-bottom: 20px;
text-transform: uppercase;
color: #FF0000;
`

const Menu = styled.nav`
a {
  display: inline-block;
  color: black;
  padding: 15px 25px;
  text-decoration: none;
  margin: 5px 20px;
  border-radius: 10px;
  background-color: info;
  
}
a:hover{
  background-color: #223094;
}
a:active{
    border-bottom: 2px solid #165168;
    padding-bottom: 5px;
    transition: all 0.3s ease;
}
`

export default Header
