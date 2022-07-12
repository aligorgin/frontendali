import {ComponentProps, ComponentType, useEffect, useState} from "react";
import clsx from "clsx";

interface Props {
    icon: ComponentType<ComponentProps<'svg'>>;
    label: string;
    borderColor?: string;
    href?: string;
    title?: string;
    copyType?: 'phone' | 'email';
}

export default function LinksPopup({icon: Icon, label, borderColor, href, title, copyType}: Props) {
    const [show, setShow] = useState<boolean>(true);

    useEffect(() => {
        let timer = setTimeout(() => {
            setShow(false)
        }, 1000)
        return () => {
            clearTimeout(timer)
        }
    }, [show])
    const copyTypeHandler = () => {
        setShow(true);
        if (copyType === 'phone') {
            return navigator.clipboard.writeText('+989923349157')
        } else if (copyType === 'email') {
            return navigator.clipboard.writeText('aliigorgin@gmail.com')
        }
    }

    return (
        <a target='_blank' rel="noreferrer" href={href} title={title} onClick={copyTypeHandler}
           className={clsx(borderColor ? borderColor : 'border-zinc-900 dark:border-zinc-200', 'cursor-pointer w-full flex justify-center items-center border-2 py-2 rounded-lg sm:hover:scale-95 active:scale-100 transition relative')}>
            {
                copyType === 'phone' && show &&
                <div className='absolute top-0 left-0 w-full h-full bg-[#34A853] grid place-items-center'>
                    Copied !
                </div>
            }
            {
                copyType === 'email' && show &&
                <div className='absolute top-0 left-0 w-full h-full bg-[#EA4335] grid place-items-center'>
                    Copied !
                </div>
            }
            <Icon className='w-6 h-6 '/>
            <span className='ml-2'>{label}</span>
        </a>
    )
}

