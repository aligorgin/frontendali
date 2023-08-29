import clsx from 'clsx';
import Image from 'next/image';
import { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import {
	ArrowSmallLeftIcon,
	ArrowSmallRightIcon,
	PlayIcon,
	StopIcon
} from '@heroicons/react/24/solid';

const TIMEOUT = 1000;

const SLIDES = [
	'https://picsum.photos/id/34/200/300',
	'https://picsum.photos/id/35/200/300',
	'https://picsum.photos/id/36/200/300',
	'https://picsum.photos/id/37/200/300'
];

// when index  0  ----- > 1
// when index  1  ----- > 2

// when index  2 < -----  1
// when index  1 < -----  0

const Controls = ({ setIndex, slideIndex }: { setIndex: any; slideIndex: number }) => {
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
				{SLIDES.map((slide, index) => {
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
								'rounded-full bg-gray-300 p-1.5',
								index === slideIndex && 'bg-gray-700'
							)}
						/>
					);
				})}
			</div>
			<div className="flex items-center justify-center space-x-12">
				<button
					onClick={() => {
						setIndex((curIndex: number) => {
							const newIndex = curIndex - 1;
							return newIndex < 0 ? SLIDES.length - 1 : newIndex;
						});
					}}
					className="rounded-md bg-blue-700 px-6 py-2 transition hover:scale-95 active:scale-105"
				>
					<ArrowSmallLeftIcon className="w-6" />
				</button>
				<button
					onClick={() => {
						increament();
					}}
					className="rounded-md bg-blue-700 px-6 py-2 transition hover:scale-95 active:scale-105"
				>
					<ArrowSmallRightIcon className="w-6" />
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
					<PlayIcon className="w-6" />
				</button>
				<button
					onClick={() => {
						clearInterval(interval.current);
					}}
					className="rounded-md bg-blue-700 px-6 py-2 transition hover:scale-95 active:scale-105"
				>
					<StopIcon className="w-6" />
				</button>
			</div>
		</div>
	);
};

const Slide = ({ slideNumber }: { slideNumber: number }) => {
	return (
		<motion.div
			animate={{ x: 0 }}
			transition={{ ease: 'easeOut', duration: 2 }}
			className="relative h-[200px] w-[500px]"
		>
			<Image alt="image" src={SLIDES[slideNumber]} fill className="rounded-md object-cover" />
		</motion.div>
	);
};

export default function Slides() {
	const [index, setIndex] = useState(0);
	return (
		<div className="flex flex-col space-y-8 overflow-hidden">
			<Slide slideNumber={index} />
			<Controls setIndex={setIndex} slideIndex={index} />
		</div>
	);
}
