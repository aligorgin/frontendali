import type { Metadata } from 'next';
import AnimatedTabs from './AnimatedTabs';

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
