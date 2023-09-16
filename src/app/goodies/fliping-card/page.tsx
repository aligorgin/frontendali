import type { Metadata } from 'next';
import FlipingCard from './FlipingCard';

export const metadata: Metadata = {
	title: 'Animated Tabs'
};

export default function Page() {
	return (
		<>
			<FlipingCard />
		</>
	);
}
