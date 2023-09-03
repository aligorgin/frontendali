import { ChatBubbleLeftRightIcon, XMarkIcon } from '@heroicons/react/24/solid';
import { AnimatePresence, motion } from 'framer-motion';
import { AiFillGithub, AiOutlineInstagram } from 'react-icons/ai';
import ThemeToggle from './ThemeToggle';
import { useState } from 'react';
import { BsLinkedin } from 'react-icons/bs';

export default function NavSocialDesktopIcons() {
	const [clicked, setClicked] = useState(false);
	return (
		<div className="hidden sm:flex">
			<div className="flex items-center justify-center space-x-4 ">
				<AnimatePresence>
					{clicked && (
						<>
							<motion.div
								initial={{ x: 15, opacity: 0 }}
								animate={{ x: -15, opacity: 1 }}
								exit={{ x: 15, opacity: 0 }}
								transition={{ ease: 'easeOut', duration: 0.2 }}
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
								transition={{ ease: 'easeOut', duration: 0.3 }}
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
								transition={{ ease: 'easeOut', duration: 0.4 }}
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
			<button className="flex  pr-4" onClick={() => setClicked(!clicked)}>
				{/*close and unclose*/}
				<AnimatePresence>
					{clicked ? (
						<motion.div className="rounded-md bg-gray-300 p-1 ring-gray-800 hover:ring-1 dark:bg-gray-600 dark:ring-gray-200">
							<motion.div
								initial={{ x: 10, opacity: 0 }}
								animate={{ x: 0, opacity: 1 }}
								exit={{ x: -20, opacity: 0 }}
								transition={{
									ease: 'easeOut',
									duration: 0.5
								}}
							>
								<XMarkIcon className="w-5" />
							</motion.div>
						</motion.div>
					) : (
						<AnimatePresence>
							<motion.div className="rounded-md bg-gray-300 p-1 ring-gray-800 hover:ring-1 dark:bg-gray-600 dark:ring-gray-200">
								<motion.div
									initial={{ x: -10, opacity: 0 }}
									animate={{ x: 0, opacity: 1 }}
									exit={{ x: -20, opacity: 0 }}
									transition={{
										ease: 'easeOut',
										duration: 0.5
									}}
								>
									<ChatBubbleLeftRightIcon className="w-5" />
								</motion.div>
							</motion.div>
						</AnimatePresence>
					)}
				</AnimatePresence>
			</button>
			<ThemeToggle />
		</div>
	);
}
