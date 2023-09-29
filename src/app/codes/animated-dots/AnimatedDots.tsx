'use client';

import { motion, useSpring } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import { DocumentDuplicateIcon, CheckIcon } from '@heroicons/react/24/outline';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { atomOneDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';

const codeString = `import { motion, useSpring } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

const BIG_SIZE = 100;
const SMALL_SIZE = 15;
const PER_PX = 0.3;

function Dot({ mousePos }: { mousePos: { x: number; y: number } }) {
	const size = useSpring(SMALL_SIZE, { damping: 30, stiffness: 200 });
	const dotRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		if (!dotRef.current) return;
		const { x, y } = mousePos;
		const { x: dotX, y: dotY } = dotRef.current.getBoundingClientRect();

		const distance = Math.sqrt(
			Math.pow(Math.abs(x - dotX), 2) + Math.pow(Math.abs(y - dotY), 2)
		);

		size.set(Math.max(BIG_SIZE - PER_PX * distance, SMALL_SIZE));
	}, [mousePos, size]);

	return (
		<div ref={dotRef} className="relative">
			<motion.div
				className="absolute -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/80"
				style={{ width: size, height: size }}
			/>
		</div>
	);
}

export default function AnimatedDots() {
	const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

	useEffect(() => {
		const handler = (e: MouseEvent) => {
			setMousePos({ x: e.clientX, y: e.clientY });
		};
		window.addEventListener('mousemove', handler);

		return () => {
			window.removeEventListener('mousemove', handler);
		};
	});

	return (
		<div className="flex px-20 flex-wrap gap-24">
			{Array.from({ length: 24 }, (_, i) => (
				<Dot key={i} mousePos={mousePos} />
			))}
		</div>
	);
}
`;

const BIG_SIZE = 100;
const SMALL_SIZE = 15;
const PER_PX = 0.3;

function Dot({ mousePos }: { mousePos: { x: number; y: number } }) {
	const size = useSpring(SMALL_SIZE, { damping: 30, stiffness: 200 });
	const dotRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		if (!dotRef.current) return;
		const { x, y } = mousePos;
		const { x: dotX, y: dotY } = dotRef.current.getBoundingClientRect();

		const distance = Math.sqrt(
			Math.pow(Math.abs(x - dotX), 2) + Math.pow(Math.abs(y - dotY), 2)
		);

		size.set(Math.max(BIG_SIZE - PER_PX * distance, SMALL_SIZE));
	}, [mousePos, size]);

	return (
		<div ref={dotRef} className="relative">
			<motion.div
				className="absolute -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/80"
				style={{ width: size, height: size }}
			/>
		</div>
	);
}

export default function AnimatedDots() {
	const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
	const [copy, setCopy] = useState(false);

	useEffect(() => {
		const handler = (e: MouseEvent) => {
			setMousePos({ x: e.clientX, y: e.clientY });
		};
		window.addEventListener('mousemove', handler);

		return () => {
			window.removeEventListener('mousemove', handler);
		};
	});

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
			<div className="px-2 pb-16 pt-12 md:px-0">
				<div className="text-center text-4xl font-bold md:text-left">Animated Dots</div>
				<div className="mt-16 flex items-center justify-center rounded-md border border-zinc-300  py-20 dark:border-zinc-600 ">
					<div className="flex flex-wrap gap-24 px-20">
						{Array.from({ length: 24 }, (_, i) => (
							<Dot key={i} mousePos={mousePos} />
						))}
					</div>
				</div>
				<div className="fixed bottom-9 z-50 mx-4 rounded-md bg-red-400 p-2 text-center sm:hidden">
					<p>
						To view the hover effect animation of the dots, please check it out on a
						desktop.
					</p>
				</div>
				<div className="mt-16">
					<div className="pb-4 text-2xl font-bold">Library used</div>
					<ul className="flex list-disc flex-col space-y-2 pl-12 text-lg">
						<LibraryUsed name="Tailwind CSS(3.3.3)" href="https://tailwindcss.com/" />
						<LibraryUsed
							name="Framer Motion(10.16.1)"
							href="https://www.framer.com/motion/"
						/>
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
