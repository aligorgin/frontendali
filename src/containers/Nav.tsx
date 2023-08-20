'use client';

import { useTheme } from 'next-themes';
import { useContext, useEffect, useState } from 'react';
import { ChatBubbleLeftRightIcon, MoonIcon, SunIcon, XMarkIcon } from '@heroicons/react/24/solid';
import clsx from 'clsx';
import { motion, AnimatePresence } from 'framer-motion';
import { BsLinkedin } from 'react-icons/bs';
import { AiFillGithub, AiOutlineInstagram } from 'react-icons/ai';
import { ModelContext } from '../providers/ModalContext';
import BurgerMenu from './components/BurgerMenu';

export default function Nav() {
	const { isOpen } = useContext(ModelContext);
	const [mounted, setMounted] = useState<boolean>(false);
	const { systemTheme, theme, setTheme } = useTheme();
	const [clicked, setClicked] = useState<boolean | null>(true);

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
					className="flex items-center justify-center"
					onClick={() => setTheme('light')}
				>
					<SunIcon className="w-6" />
				</button>
			);
		}
		return (
			<button className="flex items-center justify-center" onClick={() => setTheme('dark')}>
				<MoonIcon className="w-6" />
			</button>
		);
	};

	return (
		<>
			<div
				className={clsx(
					'sticky top-0 w-full border-b-[.5px] border-zinc-900/20 bg-zinc-200/80 backdrop-blur-sm transition duration-200 dark:border-zinc-200/20 dark:bg-zinc-900/80',
					isOpen ? 'z-0' : 'z-10'
				)}
			>
				<div className="mx-auto max-w-2xl">
					<div className="flex items-center justify-between px-4 py-4 md:px-0">
						<div className="hidden space-x-4 sm:flex">
							<div className={clsx('text-zinc-800/50 dark:text-zinc-200/70')}>
								Home
							</div>
							<div className={clsx('text-zinc-800/50 dark:text-zinc-200')}>
								Recipes
							</div>
						</div>
						<div>
							<h1 className="relative text-2xl sm:hidden">Ali Gorgin</h1>
						</div>

						<div className="hidden space-x-2 sm:flex">
							<button
								className="flex items-center justify-center"
								onClick={() => setClicked(!clicked)}
							>
								{/*close and unclose*/}
								<motion.div
									animate={clicked ? { x: 0, opacity: 1 } : { x: 13, opacity: 0 }}
									transition={{ ease: 'easeOut', duration: 0.2 }}
								>
									<ChatBubbleLeftRightIcon className="w-6 translate-x-1/2" />
								</motion.div>
								<motion.div
									animate={
										clicked ? { x: -13, opacity: 0 } : { x: 0, opacity: 1 }
									}
									transition={{ ease: 'easeOut', duration: 0.2 }}
								>
									<XMarkIcon className="w-6 -translate-x-1/2" />
								</motion.div>
							</button>
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
							<div>{renderThemeToggle()}</div>
						</div>
					</div>
				</div>
			</div>
			<BurgerMenu>
				<>
					<div className="flex items-center justify-between space-x-2">
						<button
							className="flex items-center justify-center rounded-md bg-zinc-300 py-1 dark:bg-zinc-600"
							onClick={() => setClicked(!clicked)}
						>
							{/*close and unclose*/}
							<motion.div
								animate={clicked ? { x: 0, opacity: 1 } : { x: 13, opacity: 0 }}
								transition={{ ease: 'easeOut', duration: 0.2 }}
							>
								<ChatBubbleLeftRightIcon className="w-6 translate-x-1/2" />
							</motion.div>
							<motion.div
								animate={clicked ? { x: -13, opacity: 0 } : { x: 0, opacity: 1 }}
								transition={{ ease: 'easeOut', duration: 0.2 }}
							>
								<XMarkIcon className="w-6 -translate-x-1/2" />
							</motion.div>
						</button>
						<div className="flex flex-1 space-x-2">
							<AnimatePresence>
								{!clicked && (
									<>
										<motion.div
											initial={{ x: 0, opacity: 0 }}
											animate={{ x: 15, opacity: 1 }}
											exit={{ x: 0, opacity: 0 }}
											transition={{
												ease: 'easeOut',
												duration: 0.1
											}}
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
											transition={{
												ease: 'easeOut',
												duration: 0.2
											}}
										>
											<a
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
											transition={{
												ease: 'easeOut',
												duration: 0.3
											}}
										>
											<a
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
						<div>{renderThemeToggle()}</div>
					</div>
				</>
			</BurgerMenu>
		</>
	);
}
