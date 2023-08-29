'use client';

import { motion } from 'framer-motion';

export default function Page() {
	return (
		<motion.div
			initial={{ x: 0, y: -50, opacity: 0 }}
			animate={{ x: 0, y: 0, opacity: 1 }}
			transition={{ type: 'spring', duration: 0.5, bounce: 0.25, delay: 0 }}
			className="px-4 pt-8 md:px-0"
		>
			hey this is goodies page without layout
		</motion.div>
	);
}
