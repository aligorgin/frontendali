import clsx from 'clsx';
import Image from 'next/image';
import { useRef, useState } from 'react';

const TIMEOUT = 1000;

const SLIDES = [
	'https://picsum.photos/id/34/200/300',
	'https://picsum.photos/id/35/200/300',
	'https://picsum.photos/id/36/200/300'
];

const Controls = ({ setIndex }: { setIndex: any }) => {
	const interval = useRef<any>();

	const increament = () => {
		return setIndex((curIndex: number) => {
			const newIndex = curIndex + 1;
			return newIndex % SLIDES.length;
		});
	};

	return (
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
				prev
			</button>
			<button
				onClick={() => {
					increament();
				}}
				className="rounded-md bg-blue-700 px-6 py-2 transition hover:scale-95 active:scale-105"
			>
				next
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
				start
			</button>
			<button
				onClick={() => {
					clearInterval(interval.current);
				}}
				className="rounded-md bg-blue-700 px-6 py-2 transition hover:scale-95 active:scale-105"
			>
				stop
			</button>
		</div>
	);
};

const Slide = ({ slideNumber }: { slideNumber: number }) => {
	return (
		<div className="relative h-[200px] w-[500px]">
			<Image alt="image" src={SLIDES[slideNumber]} fill className="rounded-md object-cover" />
		</div>
	);
};

const Bullets = ({ bulletNumber, setIndex }: { bulletNumber: number; setIndex: any }) => {
	return (
		<div className="flex items-center justify-center space-x-4">
			{SLIDES.map((slide,index) => {
				return (
					<button
						onClick={() => {
							setIndex(2);
							console.log(index);
						}}
						key={index}
						className={clsx('rounded-full bg-white p-1.5')}
					/>
				);
			})}
		</div>
	);
};

export default function Slides() {
	const [index, setIndex] = useState(0);
	return (
		<div className="flex flex-col space-y-8">
			<Slide slideNumber={index} />
			<Bullets bulletNumber={index} setIndex={setIndex} />
			<Controls setIndex={setIndex} />
		</div>
	);
}
