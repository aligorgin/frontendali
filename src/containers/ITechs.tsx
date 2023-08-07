import TechNameWithIcon from './components/TechNameWithIcon';

export default function ITechs() {
	const techNames = [
		{ id: 0, name: 'HTML/Css' },
		{ id: 1, name: 'Javascript' },
		{ id: 2, name: 'Typescript' },
		{ id: 3, name: 'Framer Motion' },
		{ id: 4, name: 'React.js' },
		{ id: 5, name: 'next.js' },
		{ id: 6, name: 'Tailwindcss' },
		{ id: 7, name: 'Git' },
		{ id: 8, name: 'Github' }
	];

	return (
		<div className="mt-10 leading-8 sm:leading-6 ">
			<p className="leading-7 sm:leading-6">
				Here are a few technologies I&apos;ve been working with recently:
			</p>
			{/* <div className="relative mt-6 grid grid-cols-2 justify-items-center gap-y-3 sm:mt-4 sm:grid-cols-3 sm:justify-items-start sm:gap-y-4 ">
				<div className="absolute left-1/2 right-1/2 top-0 h-full w-[1px] -translate-x-1/2 bg-light-orange dark:bg-light-blue sm:hidden" />
				{techNames.map((name) => (
					<>
						<div key={name.id} className="ml-0 flex flex-wrap items-center sm:ml-6">
							<span className="flex h-5  items-center justify-center border-l-0 border-l-light-orange pl-2 dark:border-l-light-blue sm:border-l-2">
								{name.name}
							</span>
						</div>
					</>
				))}
			</div> */}
			<div className="mt-6 grid grid-cols-2 gap-3 md:grid-cols-3">
				{techNames.map((name, index) => (
					<div
						className="rounded border-[.5px] border-light-orange px-4 py-2 dark:border-light-blue"
						key={index}
					>
						{name.name}
					</div>
				))}
			</div>
		</div>
	);
}
