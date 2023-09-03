// 'use client'
// if you import it to another compoennt that have 'use client' you dont need to
// make it client in this component, like tree hierarchy

import { useState } from 'react';

export default function Form() {
	const [form, setForm] = useState({
		firstname: '',
		lastname: '',
		password: '',
		email: '',
		zipcode: ''
	});

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setForm({ ...form, [e.target.name]: e.target.value });
	};

	return (
		<form className="flex flex-col space-y-2">
			<input type="text" name="firstname" onChange={handleChange} />
			<input type="text" name="lastname" onChange={handleChange} />
			<input type="text" name="password" onChange={handleChange} />
			<input type="text" name="email" onChange={handleChange} />
			<input type="text" name="zipcode" onChange={handleChange} />
			<button type="submit" className="rounded-md bg-blue-300">
				Submit
			</button>
			<div>{form.firstname}</div>
		</form>
	);
}
