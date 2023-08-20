'use client';

import Image from 'next/image';
import useDelayedText from '../utils/useDelayedText';
import clsx from 'clsx';
import { ChatBubbleLeftRightIcon } from '@heroicons/react/24/solid';
import { useContext, useEffect, useState } from 'react';
import { ModelContext } from '../providers/ModalContext';
import TextLoop from './components/TextLoop';

export default function Header() {
	const [index, setIndex] = useState(0);
	// const [cvClicked, setCvClicked] = useState<boolean | null>(null);
	const { setOpen } = useContext(ModelContext);
	const text = useDelayedText("ello, I'm Ali", 200);

	const buttonCssClasses =
		'flex shadow-lg active:scale-95 active:shadow hover:shadow-med-hover sm:hover:-translate-y-[2px] sm:active:translate-y-0 hover:brightness-110 transition-all duration-100 text-white justify-center items-center w-2/3 h-[48px] sm:w-[170px] sm:h-[40px] rounded-md';

	// useEffect(() => {
	// 	let timer = setTimeout(() => {
	// 		setCvClicked(false);
	// 	}, 2500);

	// 	return () => {
	// 		clearTimeout(timer);
	// 	};
	// }, [cvClicked]);

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
		<header className="mx-auto mt-8 max-w-2xl px-4 md:px-0">
			<div className="flex flex-col-reverse items-center justify-center sm:flex-row ">
				<div className="text-center sm:text-left">
					<h1 className="text-5xl font-bold">H{text}</h1>
					<div
						className={clsx(
							'mt-2 flex justify-center py-2 text-[1.25rem] opacity-80 sm:justify-start sm:py-0  sm:pr-0',
							index === 0 ? 'pr-[5.3rem]' : 'pr-[6.8rem]'
						)}
					>
						<TextLoop index={index} />
						<div
							className={clsx(
								index === 0 && 'translate-x-[5.8rem] ',
								index === 1 && 'translate-x-[7rem]',
								index === 2 && 'translate-x-[7.6rem]',
								'transition-transform duration-500'
							)}
						>
							Developer
						</div>
					</div>
					<div className="mt-0 font-normal leading-7 sm:mt-2 sm:leading-6">
						Greetings! I&lsquo;m Ali Gorgin, a self-taught Front-End Developer residing
						in Tehran. With a knack for creating and enhancing web apps, I invite you to
						explore my portfolio.
					</div>
				</div>
				<div className="relative mb-4 ml-0 h-[213px] w-[213px] flex-shrink-0 sm:mb-0 sm:ml-16 sm:h-[146px] sm:w-[146px]">
					<Image
						src={'/avatar.jpg'}
						fill
						className="rounded-xl object-cover"
						alt={'Ali Gorgin'}
						priority
					/>
				</div>
			</div>
			<div className="mt-10 flex flex-col items-center justify-center sm:flex-row sm:justify-start">
				<button
					className={clsx(
						buttonCssClasses,
						'bg-gradient-to-t from-dark-red to-light-orange dark:bg-gradient-to-t dark:from-dark-purple dark:to-light-blue'
					)}
					onClick={() => setOpen(true)}
				>
					<span className="ml-1 flex text-lg">
						<ChatBubbleLeftRightIcon className="w-7 text-zinc-200" />
					</span>
				</button>
			</div>
		</header>
	);
}
