'use client';

import { DocumentDuplicateIcon, CheckIcon } from '@heroicons/react/24/outline';
import clsx from 'clsx';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { atomOneDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';

let items = [
	{ id: 'Video', label: 'Video' },
	{ id: 'Photo', label: 'Photo' },
	{ id: 'Live', label: 'Live' },
	{ id: 'Social', label: 'Social' },
	{ id: 'About', label: 'About' }
];

const codeString = `import clsx from 'clsx';
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
	const [activeTab, setActiveTab] = useState(items[0].id);

	return (
		<div className="text-center text-4xl font-bold sm:text-left">Animated Tabs</div>
		<div className="mt-16 flex flex-col items-center justify-center space-x-0 space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
			{items.map((tab) => (	
				<button
					key={tab.id}
					onClick={() => setActiveTab(tab.id)}
					style={{
						WebkitTapHighlightColor: 'transparent'
					}}
					className={clsx(
						activeTab === tab.id
							? ''
							: 'hover:text-black/60 dark:hover:text-white/60',
						'relative rounded-full px-3 py-1.5 font-medium outline-sky-400 transition focus-visible:outline-2'
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
`;
export default function AnimatedTabs() {
	const [activeTab, setActiveTab] = useState(items[0].id);
	const [copy, setCopy] = useState(false);

	useEffect(() => {
		const timer = setTimeout(() => {
			setCopy(false);
		}, 2000);

		return () => {
			clearTimeout(timer);
		};
	}, [copy]);

	return (
		<motion.div
			initial={{ x: 200, y: 0, opacity: 0 }}
			animate={{ x: 0, y: 0, opacity: 1 }}
			transition={{ type: 'spring', duration: 0.5, bounce: 0.25, delay: 0 }}
		>
			<div className="mt-12 px-2 pb-16 md:px-0">
				<div className="text-center text-4xl font-bold md:text-left">Animated Tabs</div>
				<div className="mt-16 flex  flex-col items-center justify-center space-x-0 space-y-4 rounded-md border border-zinc-300 py-20 dark:border-zinc-600 sm:flex-row sm:space-x-4 sm:space-y-0">
					{items.map((tab) => (
						<button
							key={tab.id}
							onClick={() => setActiveTab(tab.id)}
							style={{
								WebkitTapHighlightColor: 'transparent'
							}}
							className={clsx(
								activeTab === tab.id
									? ''
									: 'hover:text-black/60 dark:hover:text-white/60',
								'relative rounded-full px-3 py-1.5 font-medium outline-sky-400 transition focus-visible:outline-2'
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
				<div className="mt-16">
					<div className="pb-4 text-2xl font-bold">Library used</div>
					<ul className="flex list-disc flex-col space-y-2 pl-12 text-lg">
						<LibraryUsed name="clsx(2.0.0)" href="https://github.com/lukeed/clsx" />
						<LibraryUsed
							name="Framer Motion(10.16.1)"
							href="https://www.framer.com/motion/"
						/>
						<LibraryUsed name="Tailwind CSS(3.3.3)" href="https://tailwindcss.com/" />
					</ul>
				</div>
				<div className="mt-16">
					<div className="mb-4 text-2xl font-bold">Code</div>
					<div className="relative">
						<button className="absolute right-2 top-2">
							{copy ? (
								<CheckIcon
									onClick={() => {
										setCopy(true);
									}}
									className="w-8 rounded-md border-[0.5px] border-green-400 bg-zinc-600 p-1 text-green-400"
								/>
							) : (
								<DocumentDuplicateIcon
									onClick={() => {
										setCopy(true);
										navigator.clipboard.writeText(codeString);
									}}
									className="w-8 rounded-md border-[0.5px] border-zinc-700 bg-zinc-600 p-1 text-white"
								/>
							)}
						</button>
						<SyntaxHighlighter
							language="javascript"
							style={atomOneDark}
							customStyle={{ padding: '16px', borderRadius: '6px' }}
						>
							{codeString}
						</SyntaxHighlighter>
					</div>
				</div>
			</div>
		</motion.div>
	);
}
const LibraryUsed = ({ name, href }: { name: string; href: string }) => {
	return (
		<li>
			<a rel="noreferrer" target="_blank" href={href} className="underline hover:opacity-80">
				{name}
			</a>
		</li>
	);
};
