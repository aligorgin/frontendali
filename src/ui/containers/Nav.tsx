import {useTheme} from "next-themes";
import {useEffect, useState} from "react";
import {ChatAlt2Icon, MoonIcon, SunIcon, XIcon} from "@heroicons/react/outline";
import clsx from "clsx";
import {motion, AnimatePresence} from "framer-motion";
import {BsLinkedin} from 'react-icons/bs';
import {AiFillGithub, AiOutlineInstagram} from 'react-icons/ai';

export default function Nav() {
    const [mounted, setMounted] = useState<boolean>(false);
    const {systemTheme, theme, setTheme} = useTheme();
    const [clicked, setClicked] = useState<boolean | null>(true)

    const navIconClasses = 'rounded-lg w-8 h-8 flex justify-center items-center hover:ring-2 hover:ring-zinc-900 dark:hover:ring-zinc-200 transition-shadow '
    const linksIconsHover = 'transition-all hover:translate-y-[2px] active:translate-y-0'
    useEffect(() => {
        setMounted(true);
    }, []);

    const renderThemeToggle = () => {
        if (!mounted) return null;
        const currentTheme = theme === 'system' ? systemTheme : theme;
        if (currentTheme === 'dark') {
            return (
                <button className={clsx('bg-zinc-600 ', navIconClasses)}
                        onClick={() => setTheme('light')}>
                    <SunIcon className='w-5 h-5 '/>
                </button>
            )
        }
        return (
            <button className={clsx('bg-zinc-300', navIconClasses)}
                    onClick={() => setTheme('dark')}>
                <MoonIcon className='w-5 h-5 '/>
            </button>
        )
    }
    console.log(clicked)

    return (
        <div
            className='sm:mt-4 fixed sm:relative top-0 right-0 left-0 transition-all duration-200 dark:bg-zinc-900 bg-zinc-200 shadow-md sm:shadow-none sm:border-none sm:bg-none z-50 w-full'>
            <div className='flex justify-between items-center my-2 mx-4 sm:mx-0 sm:mt-2'>
                {/*left nav*/}
                <button className={clsx(navIconClasses, 'bg-zinc-300 dark:bg-zinc-600 overflow-hidden')}
                        onClick={() => setClicked(!clicked)}>
                    {/*close and un close*/}
                    <motion.div
                        animate={clicked ? {x: 0, opacity: 1} : {x: 13, opacity: 0}}
                        transition={{ease: 'easeOut', duration: .2}}
                    >
                        <ChatAlt2Icon className='w-5 h-5 translate-x-1/2'/>
                    </motion.div>
                    <motion.div
                        animate={clicked ? {x: -13, opacity: 0} : {x: 0, opacity: 1}}
                        transition={{ease: 'easeOut', duration: .2}}
                    >
                        <XIcon className='w-5 h-5 -translate-x-1/2'/>
                    </motion.div>
                </button>
                {/*links*/}
                <div className='flex-1 flex space-x-2'>
                    <AnimatePresence>
                        {!clicked &&
                            <>
                                <motion.div
                                    initial={{x: 0, opacity: 0}}
                                    animate={{x: 15, opacity: 1}}
                                    exit={{x: 0, opacity: 0}}
                                    transition={{ease: 'easeOut', duration: .1}}
                                ><a className={clsx('transition-all hover:translate-y-[2px] active:translate-y-0')}
                                    target={'_blank'} href="https://www.github.com/aligorgin" rel="noreferrer">
                                    <AiFillGithub className='w-6 h-6 '/>
                                </a>
                                </motion.div>
                                <motion.div
                                    initial={{x: 0, opacity: 0}}
                                    animate={{x: 15, opacity: 1}}
                                    exit={{x: 0, opacity: 0}}
                                    transition={{ease: 'easeOut', duration: .2}}
                                ><a className={clsx(linksIconsHover)} target={'_blank'}
                                    href="https://www.instagram.com/frontendalii/" rel="noreferrer">
                                    <AiOutlineInstagram className='w-6 h-6 '/>
                                </a>
                                </motion.div>
                                <motion.div
                                    initial={{x: 0, opacity: 0}}
                                    animate={{x: 15, opacity: 1}}
                                    exit={{x: 0, opacity: 0}}
                                    transition={{ease: 'easeOut', duration: .3}}
                                ><a className={clsx(linksIconsHover)} target={'_blank'}
                                    href="https://www.linkedin.com/in/ali-gorgin-562b71199"
                                    rel="noreferrer">
                                    <BsLinkedin className='w-6 h-6 '/>
                                </a>
                                </motion.div>
                            </>
                        }
                    </AnimatePresence>


                </div>


                {/*right nav*/}
                <div>
                    {renderThemeToggle()}
                </div>

            </div>

        </div>

    )
}