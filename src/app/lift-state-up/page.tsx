'use client';

import { useState } from 'react';

const ChildComponent = ({ count, increment }: any) => {
	return (
		<div>
			<p>Count:{count}</p>
			<button onClick={increment}>Increment</button>
		</div>
	);
};

const ParentComponent = () => {
	let [count, setCount] = useState<any>(0);

	const IncrementCount = () => {
		setCount(count + 1);
	};

	return (
		<div>
			<div>exapmle</div>
			<ChildComponent count={count} increment={IncrementCount} />
		</div>
	);
};

export default ParentComponent;
