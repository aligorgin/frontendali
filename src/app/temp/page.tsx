'use client';

import Component2 from '@/containers/practice/states/CustomHook';
import StaleClosure from '../../containers/practice/states/StaleClosure';
import Post from '../../containers/practice/states/WrongFetchDataWithUseEffect';
import FlipingCard from '../../containers/practice/FlipingCard';
import Slides from '../../containers/practice/CarouselSlider';
import Console from '../../containers/practice/Console';

export default function Page() {
	return (
		<div className="flex min-h-screen items-center justify-center">
			<FlipingCard />
		</div>
	);
}
