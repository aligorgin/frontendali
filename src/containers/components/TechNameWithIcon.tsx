interface Props {
	TechName: string;
}

export default function TechNameWithIcon({ TechName }: Props) {
	return (
		<div className="ml-0 flex flex-wrap items-center sm:ml-6">
			<span className="flex h-5  items-center justify-center border-l-0 border-l-light-orange pl-2 dark:border-l-light-blue sm:border-l-2">
				{TechName}
			</span>
		</div>
	);
}
