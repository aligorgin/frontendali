import {ReactNode} from "react";
import Image from "next/image";
import Weather from '../../../public/weather.png';
import Svg from "../../svg/Svg";
import ImageCards from "./ImageCards";

interface Props {
    desc: string;
    iconSrc: string;
    image: string;
    children?: ReactNode;
}


export default function Cards({children, desc, iconSrc, image}: Props) {
    return (
        <div className='mb-20'>
            <div className='h-[12rem] sm:h-[20rem] min-w-[16rem] sm:min-w-[30.938rem] rounded-lg flex flex-col shadow-lg'>
                <div>
                    {image === 'weather' && <ImageCards image={'weather'}/>}
                </div>

                <div className='flex justify-between items-center h-full px-2 sm:px-4 text-sm'>
                    <div>{desc}</div>
                    <div
                        className='cursor-pointer transition hover:-translate-y-1 active:-translate-y-0.5 hover:brightness-125 '>
                        <a href={iconSrc} target={'_blank'} rel={'noreferrer'}>
                            <Svg name={'github'}/>
                        </a>
                    </div>
                </div>
            </div>
        </div>

    )
}