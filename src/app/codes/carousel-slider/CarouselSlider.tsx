'use client';

import { DocumentDuplicateIcon, CheckIcon } from '@heroicons/react/24/outline';
import clsx from 'clsx';
import Image from 'next/image';
import { Dispatch, SetStateAction, useEffect, useRef, useState } from 'react';
import {
	ArrowSmallLeftIcon,
	ArrowSmallRightIcon,
	PlayIcon,
	StopIcon
} from '@heroicons/react/24/solid';
import { motion } from 'framer-motion';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { atomOneDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';

const codeString = `import { DocumentDuplicateIcon, CheckIcon } from '@heroicons/react/24/outline';
import clsx from 'clsx';
import Image from 'next/image';
import { Dispatch, SetStateAction, useEffect, useRef, useState } from 'react';
import {
	ArrowSmallLeftIcon,
	ArrowSmallRightIcon,
	PlayIcon,
	StopIcon
} from '@heroicons/react/24/solid';

const TIMEOUT = 1000;
// random images 
const SLIDES = ['/slide-1.jpg', '/slide-2.jpg', '/slide-3.jpg', '/slide-4.jpg'];

const Controls = ({
	setIndex,
	slideIndex
}: {
	setIndex: Dispatch<SetStateAction<any>>;
	slideIndex: number;
}) => {
	const [isPlay, setIsPlay] = useState(false);
	const interval = useRef<any>();

	const increament = () => {
		return setIndex((curIndex: number) => {
			const newIndex = curIndex + 1;
			return newIndex % SLIDES.length;
		});
	};

	return (
		<div className="flex flex-col space-y-6">
			<div className="flex items-center justify-center space-x-4">
				{/* dots */}
				{SLIDES.map((_, index) => {
					return (
						<button
							onClick={() => {
								if (interval.current) {
									clearInterval(interval.current);
								}
								setIndex(index);
							}}
							key={index}
							className={clsx(
								'rounded-full bg-zinc-300 p-1.5',
								index === slideIndex && 'bg-zinc-700'
							)}
						/>
					);
				})}
			</div>
			<div className="flex items-center justify-center space-x-4 pt-8 sm:space-x-8 sm:pt-0">
				<button
					onClick={() => {
						setIndex((curIndex: number) => {
							const newIndex = curIndex - 1;
							return newIndex < 0 ? SLIDES.length - 1 : newIndex;
						});
						if (interval.current) {
							clearInterval(interval.current);
							setIsPlay(false);
						}
					}}
					className="rounded-md bg-blue-700 px-6 py-2 transition hover:scale-95 active:scale-105"
				>
					<ArrowSmallLeftIcon className="w-6 text-white" />
				</button>
				{isPlay ? (
					<button
						onClick={() => {
							setIsPlay(!isPlay);
							clearInterval(interval.current);
						}}
						className="rounded-md bg-blue-700 px-6 py-2 transition hover:scale-95 active:scale-105"
					>
						<StopIcon className="w-6 text-white" />
					</button>
				) : (
					<button
						onClick={() => {
							setIsPlay(!isPlay);
							if (interval.current) {
								clearInterval(interval.current);
							}
							interval.current = setInterval(increament, TIMEOUT);
						}}
						className="rounded-md bg-blue-700 px-6 py-2 transition hover:scale-95 active:scale-105"
					>
						<PlayIcon className="w-6 text-white" />
					</button>
				)}
				<button
					onClick={() => {
						increament();
						if (interval.current) {
							clearInterval(interval.current);
							setIsPlay(false);
						}
					}}
					className="rounded-md bg-blue-700 px-6 py-2 transition hover:scale-95 active:scale-105"
				>
					<ArrowSmallRightIcon className="w-6 text-white" />
				</button>
			</div>
		</div>
	);
};

const Slide = ({ slideNumber }: { slideNumber: number }) => {
	const [loaded, setLoaded] = useState(true);

	const handleImageLoad = () => {
		setLoaded(false);
	};
	return (
		<motion.div
			animate={{ x: 0 }}
			transition={{ ease: 'easeOut', duration: 2 }}
			className="relative h-[200px] w-full sm:w-[500px]"
		>
			{loaded && <div className="shimmer h-full w-full" />}
			<Image
				alt="image"
				src={SLIDES[slideNumber]}
				fill
				priority
				onLoad={handleImageLoad}
				className="rounded-md object-cover"
			/>
		</motion.div>
	);
};

export default function Slides() {
	const [index, setIndex] = useState(0);

	return (
		<div>
			<div className="mt-12 px-2 md:px-0">
				<div className="text-center text-4xl font-bold md:text-left">Carousel Slider</div>
				<div className="mt-16 flex flex-col items-center justify-center space-y-8 rounded-md border border-zinc-300 px-2 py-20 dark:border-zinc-600 ">
					<Slide slideNumber={index} />
					<Controls setIndex={setIndex} slideIndex={index} />
				</div>
			</div>
		</div>
	);
}
`;

const TIMEOUT = 1000;
// randome images
const SLIDES = ['/slide-1.jpg', '/slide-2.jpg', '/slide-3.jpg', '/slide-4.jpg'];

const Controls = ({
	setIndex,
	slideIndex
}: {
	setIndex: Dispatch<SetStateAction<any>>;
	slideIndex: number;
}) => {
	const [isPlay, setIsPlay] = useState(false);
	const interval = useRef<any>();

	const increament = () => {
		return setIndex((curIndex: number) => {
			const newIndex = curIndex + 1;
			return newIndex % SLIDES.length;
		});
	};

	return (
		<div className="flex flex-col space-y-6">
			<div className="flex items-center justify-center space-x-4">
				{/* dots */}
				{SLIDES.map((_, index) => {
					return (
						<button
							onClick={() => {
								if (interval.current) {
									clearInterval(interval.current);
								}
								setIndex(index);
							}}
							key={index}
							className={clsx(
								'rounded-full bg-zinc-300 p-1.5',
								index === slideIndex && 'bg-zinc-700'
							)}
						/>
					);
				})}
			</div>
			<div className="flex items-center justify-center space-x-4 pt-8 sm:space-x-8 sm:pt-0">
				<button
					onClick={() => {
						setIndex((curIndex: number) => {
							const newIndex = curIndex - 1;
							return newIndex < 0 ? SLIDES.length - 1 : newIndex;
						});
						if (interval.current) {
							clearInterval(interval.current);
							setIsPlay(false);
						}
					}}
					className="rounded-md bg-blue-700 px-6 py-2 transition hover:scale-95 active:scale-105"
				>
					<ArrowSmallLeftIcon className="w-6 text-white" />
				</button>
				{isPlay ? (
					<button
						onClick={() => {
							setIsPlay(!isPlay);
							clearInterval(interval.current);
						}}
						className="rounded-md bg-blue-700 px-6 py-2 transition hover:scale-95 active:scale-105"
					>
						<StopIcon className="w-6 text-white" />
					</button>
				) : (
					<button
						onClick={() => {
							setIsPlay(!isPlay);
							if (interval.current) {
								clearInterval(interval.current);
							}
							interval.current = setInterval(increament, TIMEOUT);
						}}
						className="rounded-md bg-blue-700 px-6 py-2 transition hover:scale-95 active:scale-105"
					>
						<PlayIcon className="w-6 text-white" />
					</button>
				)}
				<button
					onClick={() => {
						increament();
						if (interval.current) {
							clearInterval(interval.current);
							setIsPlay(false);
						}
					}}
					className="rounded-md bg-blue-700 px-6 py-2 transition hover:scale-95 active:scale-105"
				>
					<ArrowSmallRightIcon className="w-6 text-white" />
				</button>
			</div>
		</div>
	);
};

const Slide = ({ slideNumber }: { slideNumber: number }) => {
	const [loaded, setLoaded] = useState(true);

	const handleImageLoad = () => {
		setLoaded(false);
	};
	return (
		<motion.div
			animate={{ x: 0 }}
			transition={{ ease: 'easeOut', duration: 2 }}
			className="relative h-[200px] w-full sm:w-[500px]"
		>
			{loaded && <div className="shimmer h-full w-full" />}
			<Image
				alt="image"
				src={SLIDES[slideNumber]}
				fill
				priority
				onLoad={handleImageLoad}
				className="rounded-md object-cover"
			/>
		</motion.div>
	);
};

export default function Slides() {
	const [index, setIndex] = useState(0);
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
				<div className="text-center text-4xl font-bold md:text-left">Carousel Slider</div>
				<div className="mt-16 flex flex-col items-center justify-center space-y-8 rounded-md border border-zinc-300 px-2 py-20 dark:border-zinc-600 ">
					<Slide slideNumber={index} />
					<Controls setIndex={setIndex} slideIndex={index} />
				</div>
				<div className="mt-16">
					<div className="pb-4 text-2xl font-bold">Library used</div>
					<ul className="flex list-disc flex-col space-y-2 pl-12 text-lg">
						<LibraryUsed name="clsx(2.0.0)" href="https://github.com/lukeed/clsx" />
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
