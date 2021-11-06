import Image from "next/image";
import Avatar from '../../../public/avatar.jpg'
import TextLoop from "react-text-loop";
import useDelayedText from "../components/useDelayedText";
import {useEffect, useState} from "react";
import Words from "../contents/Words";

export default function Header() {
    const [show, setShow] = useState(false);

    const text = useDelayedText('Hello, i\'m Ali', 100, 1000);

    useEffect(() => {
        const timeout = setTimeout(() => {
            setShow(true)
        }, 2500);

        return () => clearTimeout(timeout)
    },[])


    return (
        <header className='flex justify-between mt-24  items-center space-x-12'>
            <div>
                <h1 className='text-5xl font-bold gradient-text from-primary-light to-secondary-light'>
                    {text}
                </h1>
                {show &&
                    <div className='mt-2 text-2xl opacity-60'>
                    <TextLoop springConfig={{stiffness: 350, damping: 8}}>
                        <span>front-end</span>
                        <span>committed</span>
                        <span>passionated</span>
                    </TextLoop>
                    &nbsp;developer
                </div>
                }
                <div className='mt-4 prose'>
                    {Words.about}
                </div>
            </div>

            <div className='w-56 h-56 self-center flex-shrink-0'>
                <Image className='rounded-full filter brightness-110' src={Avatar} alt='a photo of ali'
                       objectFit={'cover'}/>
            </div>
        </header>
    )
}