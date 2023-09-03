'use client';

import clsx from 'clsx';
import { motion } from 'framer-motion';
import { useState } from 'react';

let items = [
	{ id: 'Video', label: 'Video' },
	{ id: 'Photo', label: 'Photo' },
	{ id: 'Live', label: 'Live' },
	{ id: 'Social', label: 'Social' },
	{ id: 'About', label: 'About' }
];

export default function AnimatedTabs() {
	let [activeTab, setActiveTab] = useState(items[0].id);

	return (
		<div className="flex h-screen items-center justify-center space-x-4">
			{items.map((tab) => (
				<button
					key={tab.id}
					onClick={() => setActiveTab(tab.id)}
					style={{
						WebkitTapHighlightColor: 'transparent'
					}}
					className={clsx(
						activeTab === tab.id ? '' : 'hover:text-white/60',
						'relative rounded-full px-3 py-1.5 text-sm font-medium text-white outline-sky-400 transition focus-visible:outline-2'
					)}
				>
					{activeTab === tab.id && (
						<motion.span
							layoutId="move"
							className="absolute inset-0 z-10 bg-white mix-blend-difference"
							style={{ borderRadius: 9999 }}
							transition={{ type: 'spring', bounce: 0.3, duration: 0.7 }}
						/>
					)}
					{tab.label}
				</button>
			))}
		</div>
	);
}
