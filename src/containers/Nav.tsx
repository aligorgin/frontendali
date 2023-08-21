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
					className="flex rounded-md  bg-gray-600 p-1 ring-gray-200 hover:ring-1"
					onClick={() => setTheme('light')}
				>
					<SunIcon className="w-7 sm:w-5" />
				</button>
			);
		}
		return (
			<button
				className="flex rounded-md  bg-gray-300 p-1 ring-gray-800 hover:ring-1"
				onClick={() => setTheme('dark')}
			>
				<MoonIcon className="w-7 sm:w-5" />
			</button>
		);
	};

	return (
		<>
			<div
				className={clsx(
					'sticky top-0 w-full border-b-[.5px] border-black/20 bg-white/80 backdrop-blur-sm transition duration-200 dark:border-white/20 dark:bg-black/80',
					isOpen ? 'z-0' : 'z-10'
				)}
			>
				<div className="mx-auto max-w-2xl">
					<div className="flex items-center justify-between p-3 md:px-0">
						{/* nav elements */}
						<div className="hidden space-x-8 sm:flex">
							<div className={clsx('text-black dark:text-white')}>Home</div>
							<div className={clsx('text-black dark:text-white')}>Recipes</div>
						</div>
						<div>
							<h1 className="relative text-2xl sm:hidden">Ali Gorgin</h1>
						</div>

						{/* nav icons */}
						<div className="hidden sm:flex">
							<div className="flex items-center justify-center space-x-4 ">
								<AnimatePresence>
									{!clicked && (
										<>
											<motion.div
												initial={{ x: 15, opacity: 0 }}
												animate={{ x: -15, opacity: 1 }}
												exit={{ x: 15, opacity: 0 }}
												transition={{ ease: 'easeOut', duration: 0.1 }}
											>
												<a
													target={'_blank'}
													href="https://www.github.com/aligorgin"
													rel="noreferrer"
												>
													<AiFillGithub className="h-6 w-6" />
												</a>
											</motion.div>
											<motion.div
												initial={{ x: 15, opacity: 0 }}
												animate={{ x: -15, opacity: 1 }}
												exit={{ x: 15, opacity: 0 }}
												transition={{ ease: 'easeOut', duration: 0.2 }}
											>
												<a
													target={'_blank'}
													href="https://www.instagram.com/frontendalii/"
													rel="noreferrer"
												>
													<AiOutlineInstagram className="h-6 w-6" />
												</a>
											</motion.div>
											<motion.div
												initial={{ x: 15, opacity: 0 }}
												animate={{ x: -15, opacity: 1 }}
												exit={{ x: 15, opacity: 0 }}
												transition={{ ease: 'easeOut', duration: 0.3 }}
											>
												<a
													target={'_blank'}
													href="https://www.linkedin.com/in/ali-gorgin-562b71199"
													rel="noreferrer"
												>
													<BsLinkedin className="h-5 w-5" />
												</a>
											</motion.div>
										</>
									)}
								</AnimatePresence>
							</div>
							<button className="flex pr-4" onClick={() => setClicked(!clicked)}>
								{/*close and unclose*/}
								<AnimatePresence>
									{clicked ? (
										<motion.div
											className="rounded-md bg-gray-300 p-1 ring-gray-800 hover:ring-1 dark:bg-gray-600 dark:ring-gray-200"
											animate={
												clicked
													? { x: 0, opacity: 1 }
													: { x: 13, opacity: 0 }
											}
											transition={{ ease: 'easeOut', duration: 0.2 }}
										>
											<ChatBubbleLeftRightIcon className="w-5" />
										</motion.div>
									) : (
										<motion.div
											className="rounded-md bg-gray-300 p-1 ring-gray-800 hover:ring-1 dark:bg-gray-600 dark:ring-gray-200"
											animate={
												clicked
													? { x: -13, opacity: 0 }
													: { x: 0, opacity: 1 }
											}
											transition={{ ease: 'easeOut', duration: 0.2 }}
										>
											<XMarkIcon className="w-5" />
										</motion.div>
									)}
								</AnimatePresence>
							</button>
							<div>{renderThemeToggle()}</div>
						</div>
					</div>
				</div>
			</div>
			<BurgerMenu>
				<>
					<div className="flex items-center justify-between space-x-2">
						<button
							className="flex items-center justify-center rounded-md py-1 "
							onClick={() => setClicked(!clicked)}
						>
							{/*close and unclose*/}
							{clicked ? (
								<motion.div
									className="rounded-md bg-gray-300 p-1 dark:bg-gray-600"
									animate={clicked ? { x: 0, opacity: 1 } : { x: 13, opacity: 0 }}
									transition={{ ease: 'easeOut', duration: 0.2 }}
								>
									<ChatBubbleLeftRightIcon className="w-7" />
								</motion.div>
							) : (
								<motion.div
									className="rounded-md bg-gray-300 p-1 dark:bg-gray-600"
									animate={
										clicked ? { x: -13, opacity: 0 } : { x: 0, opacity: 1 }
									}
									transition={{ ease: 'easeOut', duration: 0.2 }}
								>
									<XMarkIcon className="w-7" />
								</motion.div>
							)}
						</button>
						<div className="flex flex-1 space-x-4">
							<AnimatePresence>
								{!clicked && (
									<>
										<motion.div
											initial={{ x: 0, opacity: 0 }}
											animate={{ x: 4, opacity: 1 }}
											exit={{ x: 0, opacity: 0 }}
											transition={{
												ease: 'easeInOut',
												duration: 0.2
											}}
										>
											<a
												target={'_blank'}
												href="https://www.github.com/aligorgin"
												rel="noreferrer"
											>
												<AiFillGithub className="h-7 w-7" />
											</a>
										</motion.div>
										<motion.div
											initial={{ x: 0, opacity: 0 }}
											animate={{ x: 4, opacity: 1 }}
											exit={{ x: 0, opacity: 0 }}
											transition={{
												ease: 'easeInOut',
												duration: 0.4
											}}
										>
											<a
												target={'_blank'}
												href="https://www.instagram.com/frontendalii/"
												rel="noreferrer"
											>
												<AiOutlineInstagram className="h-7 w-7" />
											</a>
										</motion.div>
										<motion.div
											initial={{ x: 0, opacity: 0 }}
											animate={{ x: 4, opacity: 1 }}
											exit={{ x: 0, opacity: 0 }}
											transition={{
												ease: 'easeInOut',
												duration: 0.6
											}}
										>
											<a
												target={'_blank'}
												href="https://www.linkedin.com/in/ali-gorgin-562b71199"
												rel="noreferrer"
											>
												<BsLinkedin className="h-7 w-7" />
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
