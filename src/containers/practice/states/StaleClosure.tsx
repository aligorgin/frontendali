import { useEffect, useState } from 'react';

export default function StaleClosure() {
	const [count, setCount] = useState(0);

	////////// 1 ////////////
	useEffect(() => {
		const i = setInterval(() => {
			console.log('interval function running...');
			setCount(count + 1);
		}, 1000);

		// clean-up function use effect, this function will run when :
		// - components unmounts
		// - also runs before running the next useEffect call
		// (so basically you can clean up something from the previous use effect run )
		return () => {
			clearInterval(i);
		};
	}, [count]);

	////////// 2 ////////////
	// !!! this is wrong! it will added 2 not 1!
	// useEffect(() => {
	// 	setInterval(() => {
	// 		console.log('interval function running...');
	// 		setCount((prev) => prev + 1);
	// 	}, 1000);
	// }, []);

	return <div>count is : {count}</div>;
}
