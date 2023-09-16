import type { Metadata } from 'next';
import AnimatedTabs from './AnimatedItems';

export const metadata: Metadata = {
	title: 'Animated Tabs'
};

export default function Page() {
	return (
		<>
			<AnimatedTabs />
		</>
	);
}
