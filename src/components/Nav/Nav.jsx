import React from "react";
import { Link } from "react-router-dom";
import './Nav.css'

export function Nav () {
  return (
    <div className="Nav">
      <div>
       <Link to='/home-base'>Portada</Link> 
       <Link to='/'>Tienda</Link> 
       <Link to='/categorias'>Categorías</Link> 
       <Link to='/contacto'>Contacto</Link> 
      </div>
      <Link to='productos-en-liquidacion'>Producctos en liquidación</Link>
    </div>
  )
}