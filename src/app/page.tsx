'use client';

import Nav from '@/containers/Nav';
import Header from '@/containers/Header';
import Projects from '@/containers/Projects';
import ITechs from '@/containers/ITechs';
import { ModelContext } from '../providers/ModalContext';
import React, { useMemo, useState } from 'react';
import PopUp from '@/containers/components/PopUp';

interface MyObj {
	isOpen: boolean;
	setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function App() {
	const [isOpen, setOpen] = useState<boolean>(false);
	const providerValue = useMemo<MyObj>(() => ({ isOpen, setOpen }), [isOpen, setOpen]);

	return (
		<div className="mx-4 max-w-[38.938rem] sm:mx-auto">
			<ModelContext.Provider value={providerValue}>
				<Nav />
				<Header />
				<ITechs />
				<Projects />
				<PopUp />
			</ModelContext.Provider>
		</div>
	);
}
