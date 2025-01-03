'use client';

import ScrollContainer from 'react-indiana-drag-scroll';
import ImageCard from './components/ImageCards';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function Projects() {
	const [mounted, setMounted] = useState(false);

	const items = [
		{
			alt: 'Rick And morty',
			desc: 'Rick and Morty API: Explore animated characters\' details.',
			iconSrc: 'https://github.com/aligorgin/rick-morty',
			imageSrc: '/rick-morty.png',
			websiteSrc: 'https://rick-morty-aliwolfi.vercel.app/',
			name: 'Rick And Morty'
		},
		{
			alt: 'Math spirit game',
			desc: 'Math Spirit: Boost math skills with playful gaming.',
			iconSrc: 'https://github.com/aligorgin/MathSprintGame',
			imageSrc: '/math-spirit.png',
			websiteSrc: 'https://aligorgin.github.io/MathSprintGame/',
			name: 'Math Spirit'
		},
		{
			alt: 'Rock Paper Scissors game',
			desc: 'Rock-Paper-Scissors: Playful Hand Gesture Game',
			iconSrc: 'https://github.com/aligorgin/spockRockGame',
			imageSrc: '/rock.png',
			websiteSrc: 'https://aligorgin.github.io/spockRockGame/',
			name: 'Rock Paper Scissors'
		},
		{
			alt: 'outdoors tours',
			desc: 'Outdoor Tours Template: Book Adventures Today!',
			iconSrc: 'https://github.com/aligorgin/natours',
			imageSrc: '/outdoors.png',
			websiteSrc: 'https://natours-henna.vercel.app/',
			name: 'Rock Paper Scissors'
		},
		{
			alt: 'Paint clone',
			desc: 'Paint Clone: Unleash Your Creativity!',
			iconSrc: 'https://github.com/aligorgin/paintClone',
			imageSrc: '/paint-clone.png',
			websiteSrc: 'https://aligorgin.github.io/paintClone/',
			name: 'Paint Clone'
		}
	];

	useEffect(() => {
		setMounted(true);
	}, [mounted]);

	if (!mounted) {
		return null;
	}

	return (
		<motion.section
			initial={{ x: -100, opacity: 0 }}
			animate={{ x: 0, opacity: 1 }}
			transition={{ duration: 0.25 }}
			className="mx-auto max-w-2xl px-2 md:px-0"
		>
			<h2 className="mt-8 text-4xl  font-semibold">Projects</h2>
			<div className="relative mt-4 max-w-full ">
				<ScrollContainer
					vertical={false}
					horizontal={true}
					className={'relative flex w-full space-x-3 pointer cursor-grab'}
				>
					{items.map((item, index) => {
						return (
							<ImageCard
								name={item.name}
								alt={item.alt}
								key={index}
								desc={item.desc}
								iconSrc={item.iconSrc}
								imageSrc={item.imageSrc}
								websiteSrc={item.websiteSrc}
							/>
						);
					})}
				</ScrollContainer>
			</div>
		</motion.section>
	);
}
