import React from 'react';
import './Icon.css'

export function Icon({ url, icon, id }) {
	return (
		<a target='_blank' href={url} className='icon-link' id={id}>
			{icon}
		</a>
	);
}
