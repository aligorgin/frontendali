'use client';

import { useContext, useState } from 'react';
import { ChatBubbleLeftRightIcon, XMarkIcon } from '@heroicons/react/24/solid';
import clsx from 'clsx';
import { motion, AnimatePresence } from 'framer-motion';
import { BsLinkedin } from 'react-icons/bs';
import { AiFillGithub, AiOutlineInstagram } from 'react-icons/ai';
import { ModelContext } from '../providers/ModalContext';
import BurgerMenu from './components/BurgerMenu';
import Link from 'next/link';
import ThemeToggle from './components/ThemeToggle';
import NavSocialDesktopIcons from './components/NavSocialDesktopIcons';
import BurgerMenuChildren from './components/BurgerMenuChildren';

export default function Nav({ children }: { children?: React.ReactNode }) {
	const { isOpen } = useContext(ModelContext);
	const [clicked, setClicked] = useState<boolean | null>(false);

	return (
		<div>
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
							<Link href="/" className={clsx('text-black dark:text-white')}>
								Home
							</Link>
							<Link href="/goodies" className={clsx('text-black dark:text-white')}>
								Goodies
							</Link>
						</div>
						<div>
							<h1 className="relative text-2xl sm:hidden">Ali Gorgin</h1>
						</div>

						<NavSocialDesktopIcons />
					</div>
				</div>
			</div>
			<BurgerMenu>
				<BurgerMenuChildren />
			</BurgerMenu>
			{children}
		</div>
	);
}
