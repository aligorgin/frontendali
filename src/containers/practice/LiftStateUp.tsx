'use client';

import React, { useState } from 'react';

// Child component
const ChildComponent = ({ count, increment }: any) => {
	return (
		<div>
			<p>Count: {count}</p>
			<button onClick={increment}>Increment</button>
		</div>
	);
};

// Parent component
const ParentComponent = () => {
	const [count, setCount] = useState(0);

	const incrementCount = () => {
		setCount(count + 1);
	};

	return (
		<div>
			<h1>Lifting State Up Example</h1>
			<ChildComponent count={count} increment={incrementCount} />
		</div>
	);
};

export default ParentComponent;
