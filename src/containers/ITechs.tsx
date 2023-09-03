'use client';

import { motion } from 'framer-motion';

export default function ITechs() {
	const techNames = [
		{ id: 0, name: 'HTML/Css' },
		{ id: 1, name: 'Javascript' },
		{ id: 2, name: 'Typescript' },
		{ id: 3, name: 'Framer Motion' },
		{ id: 4, name: 'React.js' },
		{ id: 5, name: 'next.js' },
		{ id: 6, name: 'Tailwindcss' },
		{ id: 7, name: 'Git' },
		{ id: 8, name: 'Github' }
	];

	return (
		<motion.div
			initial={{ x: 50, y: 0, opacity: 0 }}
			animate={{ x: 0, y: 0, opacity: 1 }}
			transition={{ type: 'spring', duration: 0.5, bounce: 0.25, delay: 0 }}
			className="mx-auto mt-8 max-w-2xl px-4 md:px-0"
		>
			<p>Here are a few technologies I&apos;ve been working with recently:</p>
			<div className="mt-6 grid grid-cols-2 gap-3 md:grid-cols-3">
				{techNames.map((name, index) => (
					<div
						className="rounded border-[0.5px] border-red-400 px-4 py-2 transition hover:scale-105 dark:border-blue-400"
						key={index}
					>
						{name.name}
					</div>
				))}
			</div>
		</motion.div>
	);
}
