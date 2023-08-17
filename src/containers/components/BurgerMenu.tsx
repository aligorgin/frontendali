import clsx from 'clsx';
import React, { useState } from 'react';

export default function BurgerMenu() {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const classes = 'z-50 w-full h-1 bg-zinc-900 dark:bg-zinc-200 rounded-md transition-all';
	const navItems = ['Home', ''];

	function toggleMenu() {
		setIsMenuOpen(!isMenuOpen);
	}

	return (
		<div className="relative sm:hidden">
			<div>
				{/* Burger menu icon */}
				<button
					onClick={toggleMenu}
					className="fixed right-4 top-4 z-[99] flex h-6 w-8 flex-col justify-between ease-in-out"
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
					'fixed right-0 top-0 z-50 h-full w-3/4 bg-zinc-200 pt-12 shadow-md transition-transform ease-out dark:bg-zinc-900',
					isMenuOpen ? 'translate-x-0' : 'translate-x-full'
				)}
			>
				<div className="mb-6 mt-2 h-[0.5px] w-full bg-zinc-900/20 dark:bg-zinc-200/20" />
				<div className="mx-4 flex flex-col items-center justify-center divide-y-[0.5px] divide-zinc-900/40 dark:divide-zinc-200/40">
					{navItems.map((item, index) => {
						return (
							<a
								className="w-full cursor-pointer list-none px-2 py-4 transition"
								key={index}
								href={`#${item}`}
								onClick={toggleMenu}
							>
								{item}
							</a>
						);
					})}
				</div>
			</div>
		</div>
	);
}
