'use client';

import Image from 'next/image';
import useDelayedText from '../utils/useDelayedText';
import clsx from 'clsx';
import { ChatBubbleLeftRightIcon } from '@heroicons/react/24/solid';
import { useContext, useEffect, useState } from 'react';
import { ModelContext } from '../providers/ModalContext';
import TextLoop from './components/TextLoop';
import { motion } from 'framer-motion';

export default function Header() {
	const [index, setIndex] = useState(0);
	const { setOpen } = useContext(ModelContext);
	const text = useDelayedText("ello, I'm Ali", 500);

	useEffect(() => {
		const timeOut = setTimeout(() => {
			let next = index + 1;
			if (next === 3) {
				next = 0;
			}
			setIndex(next);
		}, 3 * 600);

		return () => {
			clearTimeout(timeOut);
		};
	}, [index]);

	return (
		<motion.header
			initial={{ x: 0, y: -50, opacity: 0 }}
			animate={{ x: 0, y: 0, opacity: 1 }}
			transition={{ type: 'spring', duration: 0.5, bounce: 0.25, delay: 0 }}
			className="mx-auto mt-8 max-w-2xl px-4 md:px-0"
		>
			<div className="relative flex flex-col-reverse items-center justify-center sm:flex-row">
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
								index === 0 && 'translate-x-[5.9rem] ',
								index === 1 && 'translate-x-[7rem]',
								index === 2 && 'translate-x-[7.7rem]',
								'transition-transform duration-500'
							)}
						>
							Developer
						</div>
					</div>
					<div className="pt-2 leading-relaxed sm:text-base sm:leading-6">
						Greetings! I&lsquo;m Ali Gorgin, a self-taught Frontend Developer residing
						in Tehran. I like to implement beautiful and functional details that allow
						users to enjoy working with the application.
					</div>
					<div className="absolute right-1/2 top-1/3 -z-50 h-[500px] w-[100px] bg-gradient-to-tr from-red-400 to-rose-400 blur-[200px] dark:from-blue-400/60 dark:to-cyan-400/60 sm:hidden" />
					<div className="absolute left-1/2 top-1/3 -z-50 h-[500px] w-[100px] bg-gradient-to-tr  blur-[200px] dark:from-blue-400/60 dark:to-cyan-400/60 sm:hidden" />
				</div>
				<div className="relative mb-4 ml-0 h-[213px] w-[213px] flex-shrink-0 sm:mb-0 sm:ml-16 sm:h-[146px] sm:w-[146px]">
					<Image
						src={'/avatar.jpg'}
						fill
						className="rounded-xl object-cover"
						sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
						alt={'Ali Gorgin'}
						priority
					/>
				</div>
			</div>
			<div className="flex flex-col items-center justify-center pt-8 sm:flex-row sm:justify-start">
				<button
					className={clsx(
						'flex h-[48px] w-[280px] items-center justify-center rounded-md text-white shadow-lg transition-all duration-200 active:scale-95 sm:h-[40px] sm:w-[170px] sm:hover:-translate-y-[2px] sm:active:translate-y-0',
						'bg-gradient-to-t from-red-600 to-red-400 dark:bg-gradient-to-t dark:from-blue-600 dark:to-blue-400'
					)}
					onClick={() => setOpen(true)}
				>
					<span className="ml-1 flex text-lg">
						<ChatBubbleLeftRightIcon className="w-7 text-zinc-200" />
					</span>
				</button>
			</div>
		</motion.header>
	);
}
