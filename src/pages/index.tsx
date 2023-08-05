import type { NextPage } from 'next';
import Head from 'next/head';
import App from '../containers/App';

const Home: NextPage = () => {
	return (
		<div>
			<Head>
				<title>FrontendAli</title>
				<meta name="description" content="Hello,I'm ali a frontend dev." />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<App />
		</div>
	);
};

export default Home;
