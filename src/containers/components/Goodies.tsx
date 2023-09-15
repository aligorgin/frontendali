import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

interface Props {
	src: string;
	alt: string;
	name: string;
	href: string;
}

export default function Goodies({ src, alt, name, href }: Props) {
	const [loaded, setLoaded] = useState<boolean>(true);
	const handleImageLoad = () => {
		setLoaded(false);
	};
	return (
		<Link
			href={`/goodies/${href}`}
			className="relative h-[260px] w-full cursor-pointer overflow-hidden rounded-md border shadow-xl dark:border-white/30 dark:shadow-white/10"
		>
			{loaded && <div className="shimmer h-full w-full" />}
			<Image
				src={`${src}`}
				fill
				sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
				className="rounded-md object-cover"
				alt={alt}
				priority
				onLoad={handleImageLoad}
			/>
			<div className="absolute backdrop-blur-sm  -bottom-1 w-full rounded-bl-md rounded-br-md bg-white/60 px-4 pb-2 pt-1 dark:bg-white/30 ">
				{name}
			</div>
		</Link>
	);
}
