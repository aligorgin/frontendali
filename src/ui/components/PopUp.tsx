import {useContext} from "react";
import clsx from "clsx";
import {ModelContext} from '../../providers/ModalContext';
import {XIcon} from "@heroicons/react/outline";
import LinksPopup from "./LinksPopup";
import {PhoneIcon} from "@heroicons/react/solid";
import {BsLinkedin} from 'react-icons/bs';
import {AiOutlineMail,AiFillGithub,AiOutlineInstagram} from 'react-icons/ai'


export default function PopUp() {
    const {isOpen, setOpen} = useContext(ModelContext);
    return (
        <div
            className={clsx('h-screen w-full backdrop-blur-xl fixed top-0 left-0 transition-all duration-200 grid place-items-center'
                , isOpen ? 'opacity-100 visible' : 'opacity-0 invisible')}>
            <div onClick={() => {
                setOpen(false)
            }} className='absolute left-0 top-0 z-[99] h-screen w-full bg-zinc-900/25 '/>
            <div
                className={clsx(isOpen ? 'scale-100 opacity-100' : 'scale-75 opacity-0', 'z-[999] dark:bg-zinc-900 bg-zinc-200 sm:w-[375px] w-11/12 rounded-lg transition-all duration-200')}>
                <div className='p-4'>
                    {/*intro*/}
                    <div className='flex justify-between'>
                        <p className='flex items-center justify-center opacity-80 text-lg cursor-default '>It's easy to find me :</p>
                        <div
                            className='grid place-items-center w-8 h-8 rounded-md hover:bg-zinc-300 hover:dark:bg-zinc-600 transition cursor-pointer'>
                            <XIcon onClick={() => {
                                setOpen(false)
                            }} className='w-6 h-6'/>
                        </div>
                    </div>
                    {/*links*/}
                    <div className='mt-4 flex flex-col space-y-3'>
                        <LinksPopup label={'+989923349157'} borderColor={'border-[#34A853]'} icon={PhoneIcon} title={'click to copy'} copyType={'phone'}/>
                        <LinksPopup label={'aliigorgin@gmail.com'} borderColor={'border-[#EA4335]'} icon={AiOutlineMail} title={'click to copy'} copyType={'email'}/>
                        <LinksPopup label={'GitHub'} icon={AiFillGithub} href={'https://github.com/aligorgin'}/>
                        <LinksPopup label={'Instagram'} borderColor={'border-[#833AB4]'} icon={AiOutlineInstagram} href={'https://www.instagram.com/nextdotali/'}/>
                        <LinksPopup label={'LinkedIn'} borderColor={'border-[#0A66C2]'} icon={BsLinkedin} href={'https://www.linkedin.com/in/ali-gorgin-562b71199'}/>
                    </div>

                </div>
            </div>
        </div>
    )
}
