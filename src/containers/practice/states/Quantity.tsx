'use client';

import { useEffect, useState } from 'react';

const PRICE_PER_ITEMS = 7;

export default function Quantity() {
	// The whole component will re-render because we call set state every time we click the button, 
	// so we don't need another state for handle that.
	const [quantity, setQuantity] = useState(1);
	const totalPrice = quantity * PRICE_PER_ITEMS;
	// const [totalPrice, setTotalPrice] = useState(0);
	// const [mounted, setMounted] = useState(false);

	// useEffect(() => {
	// 	setMounted(true);
	// }, []);

	// useEffect(() => {
	// 	setTotalPrice(quantity * PRICE_PER_ITEMS);
	// }, [quantity]);

	const handleClick = () => {
		setQuantity(quantity + 1);
	};

	// if (!mounted) {
	// 	return null;
	// }

	return (
		<div>
			<button onClick={handleClick}>add {quantity} items</button>
			<div>total is : {totalPrice}</div>
		</div>
	);
}
