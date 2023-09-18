import type { Metadata } from 'next';
import Slides from './CarouselSlider';

export const metadata: Metadata = {
	title: 'Carousel slider'
};

export default function Page() {
	return (
		<>
			<Slides />
		</>
	);
}
