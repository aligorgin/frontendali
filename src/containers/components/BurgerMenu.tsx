import clsx from 'clsx';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { useState } from 'react';

interface Props {
	children?: React.ReactNode;
}

export default function BurgerMenu({ children }: Props) {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const classes =
		'z-50 w-full h-[1px] bg-black dark:bg-white rounded-md transition-all duration-200';
	const pathname = usePathname();
	const navItems = [
		{
			name: 'Home',
			path: '/'
		},
		{
			name: 'Goodies',
			path: '/goodies'
		}
	];

	function toggleMenu() {
		setIsMenuOpen(!isMenuOpen);
	}

	return (
		<div className="relative sm:hidden">
			<div>
				{/* Burger menu icon */}
				<button
					onClick={toggleMenu}
					className="fixed right-4 top-[17px] z-[99] flex h-5 w-8 flex-col justify-between ease-in-out"
				>
					<div className={clsx(classes, isMenuOpen && 'translate-y-[.7rem] rotate-45')} />
					<div className={clsx(classes, isMenuOpen && '-translate-x-full opacity-0')} />
					<div
						className={clsx(classes, isMenuOpen && '-translate-y-[.6rem] -rotate-45')}
					/>
				</button>
			</div>

			{/* Mask layer */}
			{isMenuOpen && (
				<div
					className="fixed inset-0 z-40 bg-zinc-900/40 backdrop-blur-md transition-opacity"
					onClick={toggleMenu}
				></div>
			)}

			{/* Menu */}
			<div
				className={clsx(
					'fixed right-0 top-0 z-50 h-full w-3/4 justify-between bg-white pt-12 shadow-md transition-transform ease-out dark:bg-black',
					isMenuOpen ? 'translate-x-0' : 'translate-x-full'
				)}
			>
				<div className="mb-6 mt-2 h-[0.5px] w-full bg-black/20 dark:bg-white/20" />
				<div className="flex h-screen flex-col justify-between px-4 ">
					<div className="flex flex-col">
						{navItems.map((item, index) => {
							const isActive = pathname === item.path;
							return (
								<Link
									className={clsx(
										isActive
											? 'text-red-600 dark:text-blue-500'
											: 'text-black/60 transition hover:text-black dark:text-white/60 dark:hover:text-white',
										'w-full cursor-pointer list-none px-2 py-4 text-xl transition'
									)}
									key={index}
									href={item.path}
									onClick={toggleMenu}
								>
									{item.name}
								</Link>
							);
						})}
					</div>
					<div className="mb-28">{children}</div>
				</div>
			</div>
		</div>
	);
}
