'use client';

import { useEffect, useState } from 'react';

export default function RenderObjectState() {
	// object !== object, cause they are pointer, address not value.
	// but if we try value like (5) or ('test') the compoennt will
	// not be re-rendered because the state is the same value
	const [price, setPrice] = useState({
		number: 100,
		total: true
	});
	console.log('component rendering...');

	function handleClick() {
		setPrice({
			number: 100,
			total: true
		});
	}

	// This is dangerious in this sitution cause object !== object (cause the are poinder, address not value)
	// useEffect (()=>{

	// },[price])
	return (
		<button onClick={handleClick} className="rounded-md bg-blue-500">
			click
		</button>
	);
}
