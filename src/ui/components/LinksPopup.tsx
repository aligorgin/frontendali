import {PhoneIcon} from "@heroicons/react/solid";
import {ComponentProps, ComponentType} from "react";
import clsx from "clsx";

interface Props {
    icon: ComponentType<ComponentProps<'svg'>>;
    label: string;
    borderColor?: string;
    href?: string;
    title?: string;
    isCopy?: boolean;
}

export default function LinksPopup({icon: Icon, label, borderColor, href, title, isCopy}: Props) {
    return (
        <a target='_blank' rel="noreferrer" href={href} title={title} onClick={()=>{navigator.clipboard.writeText('09923349157')}}
           className={clsx(borderColor ? borderColor : 'border-zinc-900 dark:border-zinc-200', 'cursor-pointer w-full flex justify-center items-center border-2 py-2 rounded-lg hover:scale-95 active:scale-100 transition')}>
            <Icon className='w-6 h-6 '/>
            <span className='ml-2'>{label}</span>
        </a>
    )
}

