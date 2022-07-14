import Avatar from '../../../public/avatar.jpg';
import Words from "../contents/Words";
import Image from "next/image";
import useDelayedText from "../../utils/useDelayedText";
import clsx from "clsx";
import {ChatAlt2Icon, DownloadIcon} from "@heroicons/react/outline";
import {TextLoop} from "react-text-loop-next";
import {useContext, useEffect, useState} from "react";
import {ModelContext} from "../../providers/ModalContext";
import {useWindowSize} from "react-use";
import ReactConfetti from "react-confetti";


export default function Header() {
    const {isOpen, setOpen} = useContext(ModelContext);
    const [cvClicked, setCvClicked] = useState<boolean | null>(null);
    const text = useDelayedText('ello, i\'m Ali', 100);
    const {width, height} = useWindowSize();


    const buttonCssClasses = 'flex shadow-lg active:scale-95 active:shadow hover:shadow-med-hover sm:hover:-translate-y-[2px] sm:active:translate-y-0 hover:brightness-110 transition-all duration-100 text-white justify-center items-center w-9/12 h-[48px] sm:w-[170px] sm:h-[40px] rounded-md'

    useEffect(() => {
        let timer = setTimeout(() => {
            setCvClicked(false);
        }, 2000)

        return () => {
            clearTimeout(timer)
        }
    }, [cvClicked]);

    return (
        <header className='mt-20 sm:mt-12'>
            <div className='flex flex-col-reverse justify-center items-center sm:flex-row '>
                <div className='text-center sm:text-left'>
                    <h1 className='text-5xl font-bold'>H{text}</h1>
                    <div className='mt-2 text-[20px] opacity-80'>
                        <TextLoop>
                            <span>front-end</span>
                            <span>committed</span>
                            <span>passionated</span>
                        </TextLoop>
                        {' '}developer
                    </div>
                    <div className='mt-2 font-normal leading-7 sm:leading-6'>{Words.about}</div>
                </div>
                <div className='w-[213px] h-[213px] sm:w-[146px] sm:h-[146px] flex-shrink-0 ml-0 sm:ml-16 mb-4 sm:mb-0'>
                    <Image className='rounded-full filter brightness-110' src={Avatar} alt='a photo of ali'
                           objectFit={'cover'}/>
                </div>
            </div>
            <div className='mt-12 flex flex-col sm:flex-row justify-center sm:justify-start items-center'>
                <a href='https://www.dropbox.com/s/1l73lg8u3po1caw/CSSAnimations.pdf?dl=1'>
                    <button
                        type={'submit'}
                        className={clsx(buttonCssClasses, 'dark:bg-gradient-to-t dark:from-dark-purple dark:to-light-blue', 'bg-gradient-to-t from-dark-red to-light-orange')}
                        onClick={() => {
                            setCvClicked(true);
                        }}
                    >
                        <DownloadIcon className='w-6 h-6'/>
                        <span className='ml-1 text-lg'>CV</span>
                    </button>
                </a>
                <button
                    className={clsx(buttonCssClasses, 'ml-0 mt-4 sm:mt-0 sm:ml-4 border-2', 'dark:border-light-blue', 'border-light-orange')}
                    onClick={() => setOpen(true)}
                >
                    <span className='ml-1 text-lg flex'>
                        <ChatAlt2Icon className='w-6 h-6 text-light-orange dark:text-light-blue'/>
                    </span>
                </button>
            </div>
            {cvClicked && <ReactConfetti width={width - 20} height={height} gravity={1.5}/>}
        </header>
    )
}