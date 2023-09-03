'use client';

import { ComponentProps, ComponentType, useEffect, useState } from 'react';
import clsx from 'clsx';

interface Props {
	icon: ComponentType<ComponentProps<'svg'>> | any;
	label: string;
	borderColor?: string;
	href?: string;
	title?: string;
	copyType?: 'phone' | 'email';
}

export default function LinksPopup({
	icon: Icon,
	label,
	borderColor,
	href,
	title,
	copyType
}: Props) {
	const [show, setShow] = useState<boolean>(true);

	useEffect(() => {
		let timer = setTimeout(() => {
			setShow(false);
		}, 1000);
		return () => {
			clearTimeout(timer);
		};
	}, [show]);
	const copyTypeHandler = () => {
		setShow(true);
		if (copyType === 'phone') {
			return navigator.clipboard.writeText('+989923349157');
		} else if (copyType === 'email') {
			return navigator.clipboard.writeText('aliigorgin@gmail.com');
		}
	};

	return (
		<a
			target="_blank"
			rel="noreferrer"
			href={href}
			title={title}
			onClick={copyTypeHandler}
			className={clsx(
				borderColor ? borderColor : 'border-zinc-900 dark:border-zinc-200',
				'relative flex w-full cursor-pointer items-center justify-center rounded-lg border-2 py-2 transition active:scale-100 sm:hover:scale-95'
			)}
		>
			{copyType === 'phone' && show && (
				<div className="absolute left-0 top-0 grid h-full w-full place-items-center bg-[#34A853]">
					Copied !
				</div>
			)}
			{copyType === 'email' && show && (
				<div className="absolute left-0 top-0 grid h-full w-full place-items-center bg-[#EA4335]">
					Copied !
				</div>
			)}
			<Icon className="h-6 w-6 " />
			<span className="ml-2">{label}</span>
		</a>
	);
}
