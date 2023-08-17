'use client';

import { useTheme } from 'next-themes';
import { useContext, useEffect, useState } from 'react';
import { ChatBubbleLeftRightIcon, MoonIcon, SunIcon, XMarkIcon } from '@heroicons/react/24/solid';
import clsx from 'clsx';
import { motion, AnimatePresence } from 'framer-motion';
import { BsLinkedin } from 'react-icons/bs';
import { AiFillGithub, AiOutlineInstagram } from 'react-icons/ai';
import { ModelContext } from '../providers/ModalContext';

export default function Nav() {
	const { isOpen } = useContext(ModelContext);
	const [mounted, setMounted] = useState<boolean>(false);
	const { systemTheme, theme, setTheme } = useTheme();
	const [clicked, setClicked] = useState<boolean | null>(true);

	const navIconClasses =
		'rounded-lg w-8 h-8 flex justify-center items-center hover:ring-2 hover:ring-zinc-900 dark:hover:ring-zinc-200 transition-shadow';
	const linksIconsHover = 'transition-all hover:translate-y-[2px] active:translate-y-0';
	useEffect(() => {
		setMounted(true);
	}, []);

	useEffect(() => {
		setMounted(true);
	}, []);

	// theme logic
	const renderThemeToggle = () => {
		if (!mounted) return null;
		const currentTheme = theme === 'system' ? systemTheme : theme;
		if (currentTheme === 'dark') {
			return (
				<button
					className={clsx('bg-zinc-600 ', navIconClasses)}
					onClick={() => setTheme('light')}
				>
					<SunIcon className="h-5 w-5 " />
				</button>
			);
		}
		return (
			<button
				className={clsx('bg-zinc-300', navIconClasses)}
				onClick={() => setTheme('dark')}
			>
				<MoonIcon className="h-5 w-5 " />
			</button>
		);
	};

	return (
		<div
			className={clsx(
				'fixed left-0 right-0 top-0 w-full bg-zinc-200 shadow-md transition duration-200 dark:bg-zinc-900 sm:relative sm:mt-4 sm:border-none sm:bg-none sm:shadow-none',
				isOpen ? 'z-0' : 'z-10'
			)}
		>
			<div className="mx-4 my-2 flex items-center justify-between sm:mx-0 sm:mt-2">
				{/*left nav*/}
				<button
					className={clsx(navIconClasses, 'overflow-hidden bg-zinc-300 dark:bg-zinc-600')}
					onClick={() => setClicked(!clicked)}
				>
					{/*close and unclose*/}
					<motion.div
						animate={clicked ? { x: 0, opacity: 1 } : { x: 13, opacity: 0 }}
						transition={{ ease: 'easeOut', duration: 0.2 }}
					>
						<ChatBubbleLeftRightIcon className="h-5 w-5 translate-x-1/2" />
					</motion.div>
					<motion.div
						animate={clicked ? { x: -13, opacity: 0 } : { x: 0, opacity: 1 }}
						transition={{ ease: 'easeOut', duration: 0.2 }}
					>
						<XMarkIcon className="h-5 w-5 -translate-x-1/2" />
					</motion.div>
				</button>
				{/*links*/}
				<div className="flex flex-1 space-x-2">
					<AnimatePresence>
						{!clicked && (
							<>
								<motion.div
									initial={{ x: 0, opacity: 0 }}
									animate={{ x: 15, opacity: 1 }}
									exit={{ x: 0, opacity: 0 }}
									transition={{ ease: 'easeOut', duration: 0.1 }}
								>
									<a
										className={clsx(
											'transition-all hover:translate-y-[2px] active:translate-y-0'
										)}
										target={'_blank'}
										href="https://www.github.com/aligorgin"
										rel="noreferrer"
									>
										<AiFillGithub className="h-6 w-6 " />
									</a>
								</motion.div>
								<motion.div
									initial={{ x: 0, opacity: 0 }}
									animate={{ x: 15, opacity: 1 }}
									exit={{ x: 0, opacity: 0 }}
									transition={{ ease: 'easeOut', duration: 0.2 }}
								>
									<a
										className={clsx(linksIconsHover)}
										target={'_blank'}
										href="https://www.instagram.com/frontendalii/"
										rel="noreferrer"
									>
										<AiOutlineInstagram className="h-6 w-6 " />
									</a>
								</motion.div>
								<motion.div
									initial={{ x: 0, opacity: 0 }}
									animate={{ x: 15, opacity: 1 }}
									exit={{ x: 0, opacity: 0 }}
									transition={{ ease: 'easeOut', duration: 0.3 }}
								>
									<a
										className={clsx(linksIconsHover)}
										target={'_blank'}
										href="https://www.linkedin.com/in/ali-gorgin-562b71199"
										rel="noreferrer"
									>
										<BsLinkedin className="h-6 w-6 " />
									</a>
								</motion.div>
							</>
						)}
					</AnimatePresence>
				</div>

				{/*right nav*/}
				<div>{renderThemeToggle()}</div>
			</div>
		</div>
	);
}
