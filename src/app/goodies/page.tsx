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
				<div className="relative h-[260px] w-full cursor-pointer rounded-md border dark:border-white/30">
					{loaded && <div className="shimmer h-full w-full" />}
					<Image
						src="/flipingCard.png"
						fill
						sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
						className="rounded-md"
						alt={'image'}
						priority
						onLoad={handleImageLoad}
					/>
					<div className="absolute bottom-0 w-full rounded-bl-md rounded-br-md bg-white/40 px-4 py-2 shadow-lg backdrop-blur-md dark:shadow-white/20">
						Fliping Card
					</div>
				</div>
			</div>
			{/* <div className="max-w-xs overflow-hidden rounded-lg bg-white shadow-md">
				<Image
					width={48}
					height={48}
					className="h-48 w-full"
					src={'/flipingCard.png'}
					alt={'image'}
				/>
				<div className="p-4">
					<h2 className="text-xl font-semibold text-gray-800">fliping card</h2>
				</div>
			</div> */}
		</motion.div>
	);
}
