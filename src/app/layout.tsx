import './globals.css';
import { Inter } from 'next/font/google';
import Providers from './providers';
import Nav from '../containers/Nav';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
	title: 'Ali Gorgin',
	description: "Hello,I'm Ali"
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en" suppressHydrationWarning>
			<body className={inter.className}>
				<Providers>
					<Nav>
						<div className="mx-auto max-w-2xl px-4 md:px-0">{children} </div>
					</Nav>
				</Providers>
			</body>
		</html>
	);
}
