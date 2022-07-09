import {useContext} from "react";
import clsx from "clsx";
import {ModelContext} from '../../providers/ModalContext';
import {XIcon} from "@heroicons/react/outline";


export default function PopUp() {
    const {isOpen, setOpen} = useContext(ModelContext);
    return (
        <div
            className={clsx('h-screen w-full backdrop-blur-md fixed top-0 left-0 transition-all duration-200 grid place-items-center'
                , isOpen ? 'opacity-100 visible' : 'opacity-0 invisible')}>
            <div onClick={() => {
                setOpen(false)
            }} className='absolute left-0 top-0 z-[99] h-screen w-full bg-zinc-900/25 '/>
            <div
                className={clsx(isOpen ? 'scale-100' : 'scale-50', 'z-[999] dark:bg-zinc-900 bg-zinc-200 sm:w-[375px] w-11/12 rounded-lg transition-all duration-200')}>
                <div className='p-4'>
                    <div className='flex justify-between'>
                        <span>i would be glad to talk :)</span>
                        <XIcon onClick={() => {
                            setOpen(false)
                        }}
                               className='w-6 h-6 cursor-pointer rounded-full hover:bg-zinc-300 hover:dark:bg-zinc-600 transition'/>
                    </div>

                </div>
            </div>
        </div>
    )
}