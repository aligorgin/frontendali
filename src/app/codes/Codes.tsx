'use client';

import { motion } from 'framer-motion';
import Goodies from '../../containers/components/Goodies';

export default function Codes() {
	const items = [
		{
			href: '/fliping-card',
			src: '/flipingCard.png',
			alt: 'fliping Card',
			name: 'fliping Card'
		},
		{
			href: '/animated-items',
			src: '/AnimatedItems.png',
			alt: 'Animated Items',
			name: 'Animated ITems'
		},
		{
			href: '/carousel-slider',
			src: '/slider.png',
			alt: 'carousel slider',
			name: 'Carousel Slider'
		}
	];

	return (
		<motion.div
			initial={{ x: -200, y: 0, opacity: 0 }}
			animate={{ x: 0, y: 0, opacity: 1 }}
			transition={{ type: 'spring', duration: 0.5, bounce: 0.25, delay: 0 }}
			className="px-2 pt-8 md:px-0"
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
