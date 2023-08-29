'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useState } from 'react';

export default function Page() {
	const [loaded, setLoaded] = useState<boolean>(true);
	const handleImageLoad = () => {
		setLoaded(false);
	};
	return (
		<motion.div
			initial={{ x: 0, y: -50, opacity: 0 }}
			animate={{ x: 0, y: 0, opacity: 1 }}
			transition={{ type: 'spring', duration: 0.5, bounce: 0.25, delay: 0 }}
			className="px-4 pt-8 md:px-0"
		>
			<div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
				<div className="relative h-[260px] w-full cursor-pointer rounded-md border border-black/30 dark:border-white/30">
					{loaded && <div className="shimmer h-full w-full" />}
					<Image
						src="/flipingCard.png"
						fill
						sizes="100vw"
						className="rounded-md object-cover"
						alt={'image'}
						priority
						onLoad={handleImageLoad}
					/>
				</div>
			</div>
		</motion.div>
	);
}
