'use client';

import Component2 from '@/containers/practice/states/CustomHook';
import StaleClosure from '../../containers/practice/states/StaleClosure';
import Post from '../../containers/practice/states/WrongFetchDataWithUseEffect';
import Slides from '../../containers/practice/CarouselSlider';
import Console from '../../containers/practice/Console';
import TicTacToe from '../../containers/practice/TicTacToe';

export default function Page() {
	return (
		<div className="flex min-h-screen items-center justify-center">
			<TicTacToe />
		</div>
	);
}
