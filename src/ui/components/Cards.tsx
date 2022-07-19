import {ReactNode} from "react";
import ImageCards from "./ImageCards";
import {AiFillGithub} from 'react-icons/ai'

interface Props {
    desc: string;
    iconSrc: string;
    image: string;
    children?: ReactNode;
}


export default function Cards({ desc, iconSrc, image}: Props) {
    return (
        <div className='mb-[3rem]'>
            <div className='h-[12rem] sm:h-[19rem] min-w-[18rem] sm:min-w-[30.938rem] rounded-lg flex flex-col shadow-lg'>
                <div>
                    {image === 'outdoor' && <ImageCards image={'outdoor'}/>}
                    {image === 'weather' && <ImageCards image={'weather'}/>}
                    {image === 'twitter' && <ImageCards image={'twitter'}/>}
                </div>

                <div className='flex justify-between items-center h-full px-2 sm:px-4 text-sm transition duration-200 dark:bg-zinc-700 rounded-br-lg rounded-bl-lg'>
                    <div>{desc}</div>
                    <div
                        className='cursor-pointer transition hover:-translate-y-1 active:-translate-y-0.5 hover:brightness-125 '>
                        <a href={iconSrc} target={'_blank'} rel={'noreferrer'}>
                            <AiFillGithub className='w-7 h-7 text-zinc-900 dark:text-zinc-200'/>
                        </a>
                    </div>
                </div>
            </div>
        </div>

    )
}