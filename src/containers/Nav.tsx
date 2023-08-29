'use client';

import { useContext, useState } from 'react';
import clsx from 'clsx';
import { ModelContext } from '../providers/ModalContext';
import BurgerMenu from './components/BurgerMenu';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import NavSocialDesktopIcons from './components/NavSocialDesktopIcons';
import BurgerMenuChildren from './components/BurgerMenuChildren';
import { motion } from 'framer-motion';

export default function Nav({ children }: { children?: React.ReactNode }) {
	const { isOpen } = useContext(ModelContext);
	const pathname = usePathname();
	const navLinks = [
		{
			name: 'Home',
			path: '/'
		},
		{
			name: 'Goodies',
			path: '/goodies'
		}
	];

	return (
		<div>
			<div
				className={clsx(
					'sticky top-0 w-full border-b-[.5px] border-black/20 bg-white/80 backdrop-blur-sm transition duration-200 dark:border-white/20 dark:bg-black/80',
					isOpen ? 'z-0' : 'z-10'
				)}
			>
				<div className="mx-auto max-w-2xl">
					<div className="flex h-[52px] items-center justify-between px-4 md:px-0">
						{/* nav elements */}
						<div className="hidden space-x-8 sm:flex">
							{navLinks.map((link, index) => {
								const isActive = pathname === link.path;
								return (
									<Link
										key={index}
										href={link.path}
										className={clsx(
											isActive
												? 'text-red-600 dark:text-blue-500'
												: 'text-black/60 transition hover:text-black dark:text-white/60 dark:hover:text-white',
											'relative'
										)}
									>
										{isActive && (
											<motion.div
												layoutId="border"
												className="absolute bottom-[-14px] z-10 h-[1px] w-full bg-red-500 dark:bg-blue-500"
												transition={{
													type: 'spring',
													bounce: 0.2,
													duration: 0.5
												}}
											/>
										)}
										{link.name}
									</Link>
								);
							})}
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
