// 'use client'
// if you import it to another compoennt that have 'use client' you dont need to
// make it client in this component, like tree hierarchy

import { useEffect, useState } from 'react';
import Image from 'next/image';

export default function Page() {
	return (
		<GithubUser username="gaearon">
			{(user: any) => (
				<div>
					<Image alt="avatar" src={user.avatar_url} width={300} height={300} priority />
					{user.name}
				</div>
			)}
		</GithubUser>
	);
}

const getUser = async (username: any) => {
	try {
		const response = await fetch(`https://api.github.com/users/${username}`);
		const data = await response.json();
		return data;
	} catch (error) {
		console.error('Error fetching data:', error);
	}
};

interface Props {
	children: React.ReactNode | any;
	username: string;
}

const GithubUser = ({ children, username }: Props) => {
	const [data, setData] = useState(null);

	useEffect(() => {
		getUser(username).then((res: any) => {
			setData(res);
		});
	}, [username]);

	console.log(data);
	return <div>{data && children(data)}</div>;
};
