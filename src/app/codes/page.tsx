import type { Metadata } from 'next';
import Codes from './Codes';

export const metadata: Metadata = {
	title: 'Codes'
};

export default function Page() {
	return (
		<>
			<Codes />
		</>
	);
}
