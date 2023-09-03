export default function FlipingCard() {
	return (
		<div className="flex h-screen items-center justify-center bg-black">
			<div className="group h-96 w-[348px] [perspective:1000px]">
				<div className="relative rounded-xl transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
					{/* front side  */}
					<div className="absolute inset-0 w-full [backface-visibility:hidden]">
						<div className="rounded-md border-[0.5px] border-gray-300 shadow-lg shadow-white/50">
							<div className="flex h-[180px] w-full items-center justify-center rounded-tl-md rounded-tr-md bg-gray-300">
								348*180
							</div>
							<div className="flex flex-col space-y-2 rounded-bl-md rounded-br-md bg-white p-4 text-black">
								<p className="text-lg font-semibold">Card Flip</p>
								<p>
									Some quick example text to build on the card title and make up
									the bulk of the card&apos;s content.
								</p>
								{/* <div className="w-fit rounded-md bg-blue-700 px-4 py-2 text-white">
									Go somewhere
								</div> */}
							</div>
						</div>
					</div>

					{/* back side  */}
					<div className="absolute inset-0 w-full [backface-visibility:hidden] [transform:rotateY(180deg)]">
						<div className="flex min-h-full flex-col rounded-md border-[0.5px] border-gray-300 bg-white text-black shadow-lg shadow-white/50">
							<div className="flex flex-col space-y-1 p-4">
								<p className="text-lg font-semibold">Card Flip</p>
								<p className="font-semibold text-gray-700/70">
									Support card subtitle
								</p>
							</div>
							<div className="flex h-[180px] w-full items-center justify-center bg-gray-300">
								Image
							</div>
							<div className="flex flex-col space-y-2 p-4">
								<p>
									Some quick example text to build on the card title and make up
									the bulk of the card&apos;s content.
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
			<div className="fixed bottom-3 px-4 text-center text-white md:hidden">
				<p>
					To view the hover effect animation of the card, please check it out on a
					desktop.
				</p>
			</div>
		</div>
	);
}
