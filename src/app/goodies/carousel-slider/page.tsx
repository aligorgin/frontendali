import type { Metadata } from 'next';
import Slides from './CarouselSlider';

export const metadata: Metadata = {
	title: 'Animated Tabs'
};

export default function Page() {
	return (
		<>
			<Slides />
		</>
	);
}
