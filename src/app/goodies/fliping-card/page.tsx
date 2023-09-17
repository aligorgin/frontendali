import type { Metadata } from 'next';
import FlipingCard from './FlipingCard';

export const metadata: Metadata = {
	title: 'Fliping Card'
};

export default function Page() {
	return (
		<>
			<FlipingCard />
		</>
	);
}
