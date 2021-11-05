import Image from "next/image";
import Avatar from '../../../public/avatar.jpg'
import TextLoop from "react-text-loop";
import useDelayedText from "../components/useDelayedText";
import {useEffect, useState} from "react";

export default function Header() {
    const [show, setShow] = useState(false);

    const text = useDelayedText('hello, i\'m ali', 100, 1000);

    useEffect(() => {
        const timeout = setTimeout(() => {
            setShow(true)
        }, 2500);

        return () => clearTimeout(timeout)
    },[])


    return (
        <header className='flex justify-between mt-24  items-center space-x-12'>
            <div>
                <h1 className='text-5xl font-bold text-gray-800'>
                    {text}
                </h1>
                {show &&
                    <div className='mt-4 text-2xl opacity-60'>a&nbsp;
                    <TextLoop springConfig={{stiffness: 350, damping: 8}}>
                        <span>front-end</span>
                        <span>committed</span>
                        <span>passionated</span>
                    </TextLoop>
                    &nbsp;developer
                </div>
                }
                <div className='mt-4 prose'>
                    good to see you  ,I'm ali gorgin ,a 22 years old self-taught front-end Developer, currently living in ahvaz.
                </div>
            </div>

            <div className='w-56 h-56 self-center flex-shrink-0'>
                <Image className='rounded-full filter brightness-110' src={Avatar} alt='a photo of ali'
                       objectFit={'cover'}/>
            </div>
        </header>
    )
}