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
        <header className='mt-12'>
            <div className='flex'>
                <div>
                    <h1 className='text-5xl font-bold text-slate-900'>{text}</h1>
                    {show &&
                        <div className='mt-2 text-[20px] text-slate-900 opacity-80'>
                            <TextLoop springConfig={{stiffness: 350, damping: 8}}>
                                <span>front-end</span>
                                <span>committed</span>
                                <span>passionated</span>
                            </TextLoop>
                            {' '}developer
                        </div>
                    }
                    <div className='mt-4 text-slate-900 text-[15px] font-normal'>{Words.about}</div>
                </div>
                <div className='w-[146px] h-[146px] flex-shrink-0 ml-16'>
                    <Image className='rounded-full filter brightness-110' src={Avatar} alt='a photo of ali'
                           objectFit={'cover'}/>
                </div>
            </div>
            <div className='mt-12'>
                <button className='flex shadow-med active:scale-95 active:shadow hover:shadow-med-hover hover:brightness-110 transition-all text-white justify-center items-center w-[211px] h-12 rounded-md bg-gradient-to-t from-[#dd2476] to-[#ff512f]'>
                    <Svg name={'download'}/>
                    <span className='ml-1 text-lg'>CV</span>
                </button>
            </div>
        </header>
    )
}