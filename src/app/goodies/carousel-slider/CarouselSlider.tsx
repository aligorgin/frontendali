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
import { motion } from 'framer-motion';

const TIMEOUT = 1000;
const SLIDES = ['/slide-1.jpg', '/slide-2.jpg', '/slide-3.jpg', '/slide-4.jpg'];

const Controls = ({ setIndex, slideIndex }: { setIndex: Dispatch<SetStateAction<any>>; slideIndex: number }) => {
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
			<div className="grid grid-cols-2 place-items-center gap-8 pt-8 sm:grid-cols-4 sm:pt-0">
				<button
					onClick={() => {
						setIndex((curIndex: number) => {
							const newIndex = curIndex - 1;
							return newIndex < 0 ? SLIDES.length - 1 : newIndex;
						});
					}}
					className="rounded-md bg-blue-700 px-6 py-2 transition hover:scale-95 active:scale-105"
				>
					<ArrowSmallLeftIcon className="w-6 text-white" />
				</button>
				<button
					onClick={() => {
						increament();
					}}
					className="rounded-md bg-blue-700 px-6 py-2 transition hover:scale-95 active:scale-105"
				>
					<ArrowSmallRightIcon className="w-6 text-white" />
				</button>
				<button
					onClick={() => {
						if (interval.current) {
							clearInterval(interval.current);
						}
						interval.current = setInterval(increament, TIMEOUT);
					}}
					className="rounded-md bg-blue-700 px-6 py-2 transition hover:scale-95 active:scale-105"
				>
					<PlayIcon className="w-6 text-white" />
				</button>
				<button
					onClick={() => {
						clearInterval(interval.current);
					}}
					className="rounded-md bg-blue-700 px-6 py-2 transition hover:scale-95 active:scale-105"
				>
					<StopIcon className="w-6 text-white" />
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
			{loaded && <div className="h-full w-full bg-zinc-300 dark:bg-zinc-600" />}
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
		<div className="mt-12">
			<div className="text-center text-4xl font-bold">Carousel Slider</div>
			<div className="mt-16 flex flex-col items-center justify-center space-y-8 px-4">
				<Slide slideNumber={index} />
				<Controls setIndex={setIndex} slideIndex={index} />
			</div>
		</div>
	);
}
`;

const TIMEOUT = 1000;
const SLIDES = ['/slide-1.jpg', '/slide-2.jpg', '/slide-3.jpg', '/slide-4.jpg'];

const Controls = ({
	setIndex,
	slideIndex
}: {
	setIndex: Dispatch<SetStateAction<any>>;
	slideIndex: number;
}) => {
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
			<div className="grid grid-cols-2 place-items-center gap-8 pt-8 sm:grid-cols-4 sm:pt-0">
				<button
					onClick={() => {
						setIndex((curIndex: number) => {
							const newIndex = curIndex - 1;
							return newIndex < 0 ? SLIDES.length - 1 : newIndex;
						});
					}}
					className="rounded-md bg-blue-700 px-6 py-2 transition hover:scale-95 active:scale-105"
				>
					<ArrowSmallLeftIcon className="w-6 text-white" />
				</button>
				<button
					onClick={() => {
						increament();
					}}
					className="rounded-md bg-blue-700 px-6 py-2 transition hover:scale-95 active:scale-105"
				>
					<ArrowSmallRightIcon className="w-6 text-white" />
				</button>
				<button
					onClick={() => {
						if (interval.current) {
							clearInterval(interval.current);
						}
						interval.current = setInterval(increament, TIMEOUT);
					}}
					className="rounded-md bg-blue-700 px-6 py-2 transition hover:scale-95 active:scale-105"
				>
					<PlayIcon className="w-6 text-white" />
				</button>
				<button
					onClick={() => {
						clearInterval(interval.current);
					}}
					className="rounded-md bg-blue-700 px-6 py-2 transition hover:scale-95 active:scale-105"
				>
					<StopIcon className="w-6 text-white" />
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
		<div className="mt-12 px-2 md:px-0">
			<div className="text-center text-4xl font-bold md:text-left">Carousel Slider</div>
			<div className="mt-16 flex flex-col items-center justify-center space-y-8 rounded-md border border-zinc-300 px-2 py-20 dark:border-zinc-600 ">
				<Slide slideNumber={index} />
				<Controls setIndex={setIndex} slideIndex={index} />
			</div>
			<div className="mt-16">
				<div className="mb-8 text-2xl font-bold">Code</div>
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
	);
}
