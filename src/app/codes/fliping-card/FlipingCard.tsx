'use client';

import { DocumentDuplicateIcon, CheckIcon } from '@heroicons/react/24/outline';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { atomOneDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';

const codeString = `import { DocumentDuplicateIcon,CheckIcon } from '@heroicons/react/24/outline';
import { useEffect, useState } from 'react';

export default function FlipingCard() {
	return (
		<div className="mt-12">
			<div className="text-center text-4xl font-bold">Fliping Card</div>
			<div className="mt-16 flex items-center justify-center px-4 sm:px-0">
				<div className="group h-96 w-[348px] [perspective:1000px]">
					<div className="relative rounded-xl transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
						{/* front side  */}
						<div className="absolute inset-0 w-full [backface-visibility:hidden]">
							<div className="rounded-md border-[0.5px] border-zinc-300 shadow-lg dark:shadow-white/50">
								<div className="flex h-[180px] w-full items-center justify-center rounded-tl-md rounded-tr-md bg-zinc-300 text-black">
									348*180
								</div>
								<div className="flex flex-col space-y-2 rounded-bl-md rounded-br-md bg-white p-4 text-black">
									<p className="text-lg font-semibold">Card Flip</p>
									<p>
										Lorem ipsum dolor sit amet consectetur adipisicing elit.
										Fugiat numquam eligendi, nihil eum quas
									</p>
									{/* <div className="w-fit rounded-md bg-blue-700 px-4 py-2 text-white">
									Go somewhere
								</div> */}
								</div>
							</div>
						</div>

						{/* back side  */}
						<div className="absolute inset-0 w-full shadow-lg [backface-visibility:hidden] [transform:rotateY(180deg)] dark:shadow-white/50">
							<div className="flex min-h-full flex-col rounded-md border-[0.5px] border-zinc-300 bg-white text-black shadow-lg shadow-white/50">
								<div className="flex flex-col space-y-1 p-4">
									<p className="text-lg font-semibold">Card Flip</p>
									<p className="font-semibold text-zinc-700/70">
										Support card subtitle
									</p>
								</div>
								<div className="flex h-[180px] w-full items-center justify-center bg-zinc-300">
									Image
								</div>
								<div className="flex flex-col space-y-2 p-4">
									<p>
										Lorem ipsum dolor sit amet consectetur adipisicing elit.
										Fugiat numquam eligendi, nihil eum quas
									</p>
									<div className="flex space-x-6">
										<p className="cursor-pointer text-blue-700 hover:underline">
											Card Link
										</p>
										<p className="cursor-pointer text-blue-700 hover:underline">
											Another Link
										</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="fixed bottom-4 mx-4 rounded-md bg-red-400 p-2 text-center md:hidden">
					<p>
						To view the hover effect animation of the card, please check it out on a
						desktop.
					</p>
				</div>
			</div>
		</div>
	);
}
`;

export default function FlipingCard() {
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
		<motion.div
			initial={{ x: 200, y: 0, opacity: 0 }}
			animate={{ x: 0, y: 0, opacity: 1 }}
			transition={{ type: 'spring', duration: 0.5, bounce: 0.25, delay: 0 }}
		>
			<div className="mt-12 px-2 md:px-0">
				<div className="text-center text-4xl font-bold md:text-left">Fliping Card</div>
				<div className="mt-16 flex items-center justify-center rounded-md border border-zinc-300  py-20 dark:border-zinc-600 ">
					<div className="group h-96 w-[348px] [perspective:1000px]">
						<div className="relative rounded-xl transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
							{/* front side  */}
							<div className="absolute inset-0 w-full [backface-visibility:hidden]">
								<div className="rounded-md border-[0.5px] border-zinc-300 shadow-lg dark:shadow-white/50">
									<div className="flex h-[180px] w-full items-center justify-center rounded-tl-md rounded-tr-md bg-zinc-300 text-black">
										348*180
									</div>
									<div className="flex flex-col space-y-2 rounded-bl-md rounded-br-md bg-white p-4 text-black">
										<p className="text-lg font-semibold">Card Flip</p>
										<p>
											Lorem ipsum dolor sit amet consectetur adipisicing elit.
											Fugiat numquam eligendi, nihil eum quas
										</p>
										{/* <div className="w-fit rounded-md bg-blue-700 px-4 py-2 text-white">
									Go somewhere
								</div> */}
									</div>
								</div>
							</div>

							{/* back side  */}
							<div className="absolute inset-0 w-full shadow-lg [backface-visibility:hidden] [transform:rotateY(180deg)] dark:shadow-white/50">
								<div className="flex min-h-full flex-col rounded-md border-[0.5px] border-zinc-300 bg-white text-black shadow-lg shadow-white/50">
									<div className="flex flex-col space-y-1 p-4">
										<p className="text-lg font-semibold">Card Flip</p>
										<p className="font-semibold text-zinc-700/70">
											Support card subtitle
										</p>
									</div>
									<div className="flex h-[180px] w-full items-center justify-center bg-zinc-300">
										Image
									</div>
									<div className="flex flex-col space-y-2 p-4">
										<p>
											Lorem ipsum dolor sit amet consectetur adipisicing elit.
											Fugiat numquam eligendi, nihil eum quas
										</p>
										<div className="flex space-x-6">
											<p className="cursor-pointer text-blue-700 hover:underline">
												Card Link
											</p>
											<p className="cursor-pointer text-blue-700 hover:underline">
												Another Link
											</p>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="fixed bottom-9 z-50 mx-4 rounded-md bg-red-400 p-2 text-center sm:hidden">
						<p>
							To view the hover effect animation of the card, please check it out on a
							desktop.
						</p>
					</div>
				</div>
				<div className="mt-16">
					<div className="pb-4 text-2xl font-bold">Library used</div>
					<ul className="flex list-disc flex-col space-y-2 pl-12 text-lg">
						<LibraryUsed name="Tailwind CSS(3.3.3)" href="https://tailwindcss.com/"/>
						<LibraryUsed name="Hero icons(2.0.18)" href="https://heroicons.com/" />
					</ul>
				</div>
				<div className="mt-16">
					<div className="mb-4 text-2xl font-bold">Code</div>
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
		</motion.div>
	);
}

const LibraryUsed = ({ name, href }: { name: string; href: string }) => {
	return (
		<li>
			<a rel="noreferrer" target="_blank" href={href} className="underline hover:opacity-80">
				{name}
			</a>
		</li>
	);
};
