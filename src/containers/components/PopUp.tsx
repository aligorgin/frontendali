'use client';

import { useContext } from 'react';
import clsx from 'clsx';
import { ModelContext } from '../../providers/ModalContext';
import { XMarkIcon } from '@heroicons/react/24/solid';
import LinksPopup from './LinksPopup';
import { PhoneIcon } from '@heroicons/react/24/solid';
import { BsLinkedin } from 'react-icons/bs';
import { AiOutlineMail, AiFillGithub, AiOutlineInstagram } from 'react-icons/ai';

export default function PopUp() {
	const { isOpen, setOpen } = useContext(ModelContext);
	return (
		<div
			className={clsx(
				'fixed left-0 top-0 grid h-screen w-full place-items-center backdrop-blur-xl transition-all duration-200',
				isOpen ? 'visible opacity-100' : 'invisible opacity-0'
			)}
		>
			<div
				onClick={() => {
					setOpen(false);
				}}
				className="absolute left-0 top-0 z-[99] h-screen w-full bg-zinc-900/25 "
			/>
			<div
				className={clsx(
					isOpen ? 'scale-100 opacity-100' : 'scale-75 opacity-0',
					'z-[999] w-11/12 rounded-lg bg-zinc-200 transition-all duration-200 dark:bg-zinc-900 sm:w-[375px]'
				)}
			>
				<div className="p-4">
					{/*intro*/}
					<div className="flex justify-between">
						<p className="flex cursor-default items-center justify-center text-lg opacity-80 ">
							Reach me at:
						</p>
						<div className="grid h-8 w-8 cursor-pointer place-items-center rounded-md  transition dark: sm:bg-none sm:hover:bg-zinc-300 sm:hover:dark:bg-zinc-600">
							<XMarkIcon
								onClick={() => {
									setOpen(false);
								}}
								className="w-6"
							/>
						</div>
					</div>
					{/*links*/}
					<div className="mt-4 flex flex-col space-y-3">
						<LinksPopup
							label={'+989923349157'}
							borderColor={'border-[#34A853]'}
							icon={PhoneIcon}
							title={'click to copy'}
							copyType={'phone'}
						/>
						<LinksPopup
							label={'aliigorgin@gmail.com'}
							borderColor={'border-[#EA4335]'}
							icon={AiOutlineMail}
							title={'click to copy'}
							copyType={'email'}
						/>
						<LinksPopup
							label={'GitHub'}
							icon={AiFillGithub}
							href={'https://github.com/aligorgin'}
						/>
						<LinksPopup
							label={'Instagram'}
							borderColor={'border-[#833AB4]'}
							icon={AiOutlineInstagram}
							href={'https://www.instagram.com/aliigorgin/'}
						/>
						<LinksPopup
							label={'LinkedIn'}
							borderColor={'border-[#0A66C2]'}
							icon={BsLinkedin}
							href={'https://www.linkedin.com/in/ali-gorgin-562b71199'}
						/>
					</div>
				</div>
			</div>
		</div>
	);
}
