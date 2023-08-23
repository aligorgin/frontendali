'use client';

import { useState } from 'react';

export default function OnInputChange() {
	const [user, setUser] = useState<any>({ name: '', address: '', age: 50 });

	const handleOnChange = (e: any) => {
		setUser({ ...user, name: e.target.value });
	};
	console.log(user);

	return (
		<>
			<form>
				<input type="text" onChange={handleOnChange} placeholder="Your name" />
			</form>
		</>
	);
}
