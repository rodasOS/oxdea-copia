import React from 'react';
import { Link } from 'react-router-dom';
import img from '../../assets/logo.webp';
import './UserTools.css';

export function UserTools() {
	return (
		<div className='UserTools'>
			<img src={img} alt='oxdea' className='logo' />

			<form action='' className='search'>
				<input type='text' placeholder='Escribe aquí lo que buscas' />
        <button type='submit'><i class="fa-solid fa-magnifying-glass"></i></button>
			</form>

      <div className='col-right'>
        <Link to='mi-usuario' className='mi-usuario-link'>INICIAR SESIÓN / REGISTRARSE</Link>
        <Link to='guardados'><i class="fa-solid fa-heart"></i></Link>
        <Link to='carrito'><i class="fa-solid fa-cart-shopping"></i></Link>
      </div>
		</div>
	);
}
