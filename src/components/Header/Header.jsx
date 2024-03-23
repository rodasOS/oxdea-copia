import React from 'react';
import { Icon } from './Icon/Icon';
import './Header.css';

export function Header() {
	return (
		<header>
			<div>
				<h3>Teléfono: 433276</h3>
			</div>
			<div>
				<Icon
					id='facebook'
					url='https://www.facebook.com/electronicaoxdea/'
					icon={<i class='fa-brands fa-facebook-f'></i>}
				/>
				<Icon
					id='instagram'
					url='https://www.instagram.com/electronicaoxdea/'
					icon={<i class='fa-brands fa-instagram'></i>}
				/>
				<Icon
					id='youtube'
					url='https://www.youtube.com/channel/UCyl9CSSTweiCYUkTUtu0bWg'
					icon={<i class='fa-brands fa-youtube'></i>}
				/>
				<Icon
					id='whatsapp'
					url='https://api.whatsapp.com/send/?phone=50242265686&text&type=phone_number&app_absent=0'
					icon={<i class="fa-brands fa-whatsapp"></i>}
				/>
			</div>
			<div>sección 3</div>
		</header>
	);
}
