import Words from "../contents/Words";
import Image from "next/image";
import useDelayedText from "../../utils/useDelayedText";
import clsx from "clsx";
import {ChatAlt2Icon, DownloadIcon} from "@heroicons/react/outline";
import {useContext, useEffect, useState} from "react";
import {ModelContext} from "../../providers/ModalContext";
import {useWindowSize} from "react-use";
import Avatar from '../../../public/avatar.jpg';
// I do not know why this has TS2307 error but not .jpg
// import pdf from '../../../public/CSSAnimations.pdf';
// import {motion, AnimatePresence} from "framer-motion";
import TextLoop from "../components/TextLoop";


export default function Header() {
    const [index, setIndex] = useState(0);
    const [cvClicked, setCvClicked] = useState<boolean | null>(null);
    const [currentIndex, setCurrentIndex] = useState<boolean | null>(null)
    const {setOpen} = useContext(ModelContext);
    const {width, height} = useWindowSize();
    const text = useDelayedText('ello, i\'m Ali', 200);
    console.log(height)

    const buttonCssClasses = 'flex shadow-lg active:scale-95 active:shadow hover:shadow-med-hover sm:hover:-translate-y-[2px] sm:active:translate-y-0 hover:brightness-110 transition-all duration-100 text-white justify-center items-center w-9/12 h-[48px] sm:w-[170px] sm:h-[40px] rounded-md'

    useEffect(() => {
        let timer = setTimeout(() => {
            setCvClicked(false);
        }, 2500)

        return () => {
            clearTimeout(timer)
        }
    }, [cvClicked]);

    useEffect(() => {
        setTimeout(() => {
            let next = index + 1;
            if (next === 3) {
                next = 0;
            }
            setIndex(next);
        }, 3 * 600);
    }, [index]);


    return (
        <header className='mt-20 sm:mt-8'>
            <div className='flex flex-col-reverse justify-center items-center sm:flex-row '>
                <div className='text-center sm:text-left'>
                    <h1 className='text-5xl font-bold'>H{text}</h1>
                    <div
                        className={clsx('mt-2 text-[1.25rem] opacity-80 flex sm:justify-start justify-center py-2 sm:py-0  sm:pr-0', index === 0 ? 'pr-[5.3rem]' : 'pr-[6.8rem]')}>
                        <TextLoop index={index}/>
                        <div
                            className={clsx(index === 0 && 'translate-x-[5.5rem] ', index === 1 && 'translate-x-[6.7rem]', index === 2 && 'translate-x-[7rem]', 'transition-transform duration-500')}>
                            Developer
                        </div>
                    </div>
                    <div className='mt-0 sm:mt-2 font-normal leading-7 sm:leading-6'>{Words.about}</div>
                </div>
                <div className='w-[213px] h-[213px] sm:w-[146px] sm:h-[146px] flex-shrink-0 ml-0 sm:ml-16 mb-4 sm:mb-0'>
                    <Image className='rounded-full filter brightness-110' src={Avatar} alt='a photo of ali'
                           objectFit={'cover'}/>
                </div>
            </div>
            <div className='mt-10 flex flex-col sm:flex-row justify-center sm:justify-start items-center'>
                <button
                    className={clsx(buttonCssClasses, 'dark:bg-gradient-to-t dark:from-dark-purple dark:to-light-blue bg-gradient-to-t from-dark-red to-light-orange')}
                    onClick={() => setOpen(true)}
                >
                    <span className='ml-1 text-lg flex'>
                        <ChatAlt2Icon className='w-6 h-6 text-zinc-200'/>
                    </span>
                </button>
            </div>
        </header>
    )
}