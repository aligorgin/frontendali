import {ReactNode} from "react";
import Image from "next/image";
import Weather from '../../../public/weather.png';
import Svg from "../svg/Svg";

interface Props {
    children ?:ReactNode;
}

export default function Cards({children}:Props){
    return(
        <div className='h-[25rem]'>
            <div className='h-[22rem]  min-w-[33rem] rounded-lg flex flex-col shadow-md'>
                <div>
                    <a className='block' href="https://weather-s3.vercel.app/" target={"_blank"} rel="noreferrer">
                        <Image className='rounded-tr-lg rounded-tl-lg' src={Weather} alt='a mini project about telling you weather' objectFit={'cover'} layout={'responsive'}/>
                    </a>
                </div>

                <div className='flex justify-between items-center  h-full w-full px-4'>
                    <div>
                        Simple app that shows the weather
                    </div>
                    <div className='cursor-pointer transition hover:-translate-y-1 active:-translate-y-0.5 hover:brightness-125 '>
                        <a href="https://github.com/aligorgin/weatherS" target={'_blank'} rel={'noreferrer'}>
                            <Svg name={'github'}/>
                        </a>
                    </div>
                </div>
            </div>
        </div>

    )
}