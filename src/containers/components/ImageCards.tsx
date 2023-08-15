'use client';

import { ArrowTopRightOnSquareIcon } from '@heroicons/react/24/solid';
import Image from 'next/image';
import { useState } from 'react';
import { AiFillGithub } from 'react-icons/ai';

interface Props {
	imageSrc: string;
	desc: string;
	iconSrc: string;
	alt: string;
	websiteSrc: string;
	name: string;
}

export default function ImageCard({ desc, imageSrc, iconSrc, alt, websiteSrc, name }: Props) {
	const [loaded, setLoaded] = useState<boolean>(true);
	const [hover, setHover] = useState(false);

	const handleImageLoad = () => {
		setLoaded(false);
	};
	return (
		<>
			<div className="mb-[3rem]">
				<div className="flex h-full min-w-[19rem] flex-col rounded-md shadow-md sm:h-[19rem] sm:min-w-[30.938rem]">
					<div>
						<a href={websiteSrc} target={'_blank'} rel="noreferrer">
							<div
								onMouseEnter={() => {
									setHover(true);
								}}
								onMouseLeave={() => setHover(false)}
								className="relative h-[260px] w-full"
							>
								{loaded && <div className="shimmer h-full w-full" />}
								<Image
									src={`${imageSrc}`}
									fill
									sizes="100vw"
									className="rounded-tl-md rounded-tr-md object-cover"
									alt={alt}
									priority
									onLoad={handleImageLoad}
								/>
								<div className="absolute left-0 top-0 h-full w-full rounded-tl-md rounded-tr-md bg-transparent transition  hover:backdrop-blur-0 md:hover:bg-black/60 md:hover:backdrop-blur-sm">
									<div className="flex h-full items-center justify-center underline">
										{hover && (
											<>
												<div className="hidden pr-2 sm:flex">
													View Website
												</div>
												<ArrowTopRightOnSquareIcon
													width={16}
													height={16}
													className="hidden sm:flex"
												/>
											</>
										)}
									</div>
								</div>
								<div className="absolute left-1 top-1 flex items-center justify-center rounded-md bg-black/80 p-1 text-white sm:hidden md:right-4 md:top-4 md:bg-transparent md:p-0">
									<span className="pr-2">{name}</span>
									<ArrowTopRightOnSquareIcon width={16} height={16} />
								</div>
							</div>
						</a>
					</div>
					<div className="flex h-full items-center justify-between rounded-bl-md rounded-br-md px-2 py-2 text-sm transition duration-200 dark:bg-zinc-700 sm:px-4">
						<div>{desc}</div>
						<div className="cursor-pointer transition hover:-translate-y-1 hover:brightness-125 active:-translate-y-0.5 ">
							<a href={iconSrc} target={'_blank'} rel={'noreferrer'}>
								<AiFillGithub className="h-7 w-7 text-zinc-900 dark:text-zinc-200" />
							</a>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
