'use client';

import { useEffect, useState } from 'react';

const useWindowSize = () => {
	const [windowSize, setWindowSize] = useState<any>(null);

	useEffect(() => {
		const handleWindowSizeChange = () => {
			setWindowSize(window.innerWidth);
		};
		window.addEventListener('resize', handleWindowSizeChange);

		// clean up function : because when this component unmounts
		// when we're navigating away and this component should not be visible anymore
		// this event listener still atached to the window and we want to remove that
		// when this component is not being used
		// when you return function in useEffect, it will be call when component unmounts
		return () => {
			window.removeEventListener('resize', handleWindowSizeChange);
		};
	}, []);

	return windowSize;
};

const Component1 = () => {
	const windowSize = useWindowSize();
	return <div></div>;
};

const Component2 = () => {
	const windowSize = useWindowSize();
	console.log(windowSize);
	return <div>component2</div>;
};

export default Component2;
