import Image from "next/image";
import Avatar from '../../../public/avatar.jpg'
import TextLoop from "react-text-loop";
import useDelayedText from "../../utils/useDelayedText";
import {useEffect, useState} from "react";
import Words from "../contents/Words";
import Svg from "../../svg/Svg";

export default function Header() {
    const [show, setShow] = useState(true);
    const text = useDelayedText('Hello, i\'m Ali', 100);

    return (
        <header className='mt-20 sm:mt-12'>
            <div className='flex flex-col-reverse justify-center items-center sm:flex-row '>
                <div className='text-center sm:text-left'>
                    <h1 className='text-5xl font-bold'>{text}</h1>
                    {show &&
                        <div className='mt-2 text-[20px] opacity-80'>
                            <TextLoop springConfig={{stiffness: 350, damping: 8}}>
                                <span>front-end</span>
                                <span>committed</span>
                                <span>passionated</span>
                            </TextLoop>
                            {' '}developer
                        </div>
                    }
                    <div className='mt-4 font-normal leading-7 sm:leading-6'>{Words.about}</div>
                </div>
                <div className='w-[213px] h-[213px] sm:w-[146px] sm:h-[146px] flex-shrink-0 ml-0 sm:ml-16 mb-4 sm:mb-0'>
                    <Image className='rounded-full filter brightness-110' src={Avatar} alt='a photo of ali'
                           objectFit={'cover'}/>
                </div>
            </div>
            <div className='mt-12 flex justify-center sm:justify-start'>
                <button className='flex shadow-med active:scale-95 active:shadow hover:shadow-med-hover hover:brightness-110 transition-all duration-100 text-white justify-center items-center w-7/12 h-[48px]  sm:w-[200px] sm:h-[41px] rounded-md bg-gradient-to-t from-dark-red to-light-orange'>
                    <Svg name={'download'}/>
                    <span className='ml-1 text-lg'>CV</span>
                </button>
            </div>
        </header>
    )
}