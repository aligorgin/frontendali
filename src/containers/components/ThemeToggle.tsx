import { MoonIcon, SunIcon } from '@heroicons/react/24/solid';
import { AnimatePresence, motion } from 'framer-motion';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

export default function ThemeToggle() {
	const [mounted, setMounted] = useState(false);
	const { systemTheme, theme, setTheme } = useTheme();

	useEffect(() => {
		setMounted(true);
	}, []);

	if (!mounted) return <div className="w-7 rounded-md bg-gray-300 p-3 dark:bg-gray-600"></div>;

	const currentTheme = theme === 'system' ? systemTheme : theme;
	return (
		<AnimatePresence>
			{currentTheme === 'dark' ? (
				<button
					className="flex rounded-md  bg-gray-600 p-1 ring-gray-200 hover:ring-1"
					onClick={() => setTheme('light')}
				>
					<motion.div
						initial={{ y: -10, opacity: 0 }}
						animate={{ y: 0, opacity: 1 }}
						exit={{ y: -10, opacity: 0 }}
						transition={{
							ease: 'easeOut',
							duration: 0.2
						}}
					>
						<SunIcon className="w-7 sm:w-5" />
					</motion.div>
				</button>
			) : (
				<button
					className="flex rounded-md  bg-gray-300 p-1 ring-gray-800 hover:ring-1"
					onClick={() => setTheme('dark')}
				>
					<motion.div
						initial={{ y: 10, opacity: 0 }}
						animate={{ y: 0, opacity: 1 }}
						exit={{ y: -10, opacity: 0 }}
						transition={{
							ease: 'easeOut',
							duration: 0.2
						}}
					>
						<MoonIcon className="w-7 sm:w-5" />
					</motion.div>
				</button>
			)}
		</AnimatePresence>
	);
}
