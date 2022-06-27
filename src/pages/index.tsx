import type {NextPage} from 'next';
import Head from 'next/head';
// import Image from 'next/image';
import App from "../ui/App";

const Home: NextPage = () => {
    return (
        <div>
            <Head>
                <title>FrontendAli</title>
                <meta name="description" content="hello,i'm ali a front end dev."/>
                <link rel="icon" href="/favicon.ico"/>
            </Head>
            <App/>
        </div>
    )
}

export default Home
