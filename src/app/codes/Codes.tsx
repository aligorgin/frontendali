'use client';

import { motion } from 'framer-motion';
import Goodies from '../../containers/components/Goodies';

export default function Codes() {
	const items = [
		{
			href: '/fliping-card',
			src: '/flipingCard.png',
			alt: 'Fliping Card',
			name: 'Fliping Card'
		},
		{
			href: '/animated-tabs',
			src: '/animated-tabs.png',
			alt: 'Animated Tabs',
			name: 'Animated Tabs'
		},
		{
			href: '/carousel-slider',
			src: '/slider.png',
			alt: 'Carousel Slider',
			name: 'Carousel Slider'
		},
		{
			href: '/animated-dots',
			src: '/animated-dots.png',
			alt: 'Animated Dots',
			name: 'Animated Dots'
		}
	];

	return (
		<motion.div
			initial={{ x: -200, y: 0, opacity: 0 }}
			animate={{ x: 0, y: 0, opacity: 1 }}
			transition={{ type: 'spring', duration: 0.5, bounce: 0.25, delay: 0 }}
			className="px-2 pb-16 pt-8 md:px-0"
		>
			<div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
				{items.map((item, index) => {
					return (
						<Goodies
							key={index}
							alt={item.alt}
							href={item.href}
							name={item.name}
							src={item.src}
						/>
					);
				})}
			</div>
		</motion.div>
	);
}
