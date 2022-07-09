import {useContext} from "react";
import clsx from "clsx";
import {ModelContext} from '../../providers/ModalContext';
import {XIcon} from "@heroicons/react/outline";
import LinksPopup from "./LinksPopup";
import {PhoneIcon} from "@heroicons/react/solid";
import {AiOutlineMail} from 'react-icons/ai'


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
                className={clsx(isOpen ? 'scale-100 opacity-100' : 'scale-75 opacity-0', 'z-[999] dark:bg-zinc-900 bg-zinc-200 sm:w-[375px] w-11/12 rounded-lg transition-all duration-200')}>
                <div className='p-4'>
                    {/*intro*/}
                    <div className='flex justify-between'>
                        <p className='flex items-center justify-center opacity-80 text-lg'>I would be glad to talk
                            :)</p>
                        <div
                            className='grid place-items-center w-8 h-8 rounded-md hover:bg-zinc-300 hover:dark:bg-zinc-600 transition cursor-pointer'>
                            <XIcon onClick={() => {
                                setOpen(false)
                            }} className='w-6 h-6'/>
                        </div>
                    </div>
                    {/*links*/}
                    <div className='mt-4 flex flex-col space-y-3'>
                        <LinksPopup label={'+989923349157'} borderColor={'#34A853'} icon={PhoneIcon}/>
                        <LinksPopup label={'aliigorgin@gmail.com'} borderColor={'#EA4335'} icon={AiOutlineMail}/>
                        <LinksPopup label={'+989923349157'} icon={PhoneIcon} href={'https://github.com/aligorgin'}/>
                        <LinksPopup label={'+989923349157'} borderColor={'#F56040'} icon={PhoneIcon} href={'https://github.com/aligorgin'}/>
                        <LinksPopup label={'+989923349157'} borderColor={'#0A66C2'} icon={PhoneIcon} href={'https://github.com/aligorgin'}/>
                    </div>

                </div>
            </div>
        </div>
    )
}

// -<>  phone number 34A853
// -<> email address  EA4335
// -<> github zinc 200 zinc 900
// -<> instagram F56040
// -<> linked in 0A66C2