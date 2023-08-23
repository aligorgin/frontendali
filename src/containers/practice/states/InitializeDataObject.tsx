'use client';

import { type } from 'os';
import { useEffect, useState } from 'react';

type Post = {
	title: string;
	body: string;
};

export default function InitalizeDataObject() {
	const [post, setPost] = useState<Post | null | any>(null);
	const [loading, setLoding] = useState(true);

	async function getData() {
		try {
			const res = await fetch('https://dummyjson.com/posts/7');
			const data = res.json();
			return data;
		} catch (err) {
			console.error(err);
		}
	}

	useEffect(() => {
		getData().then((data) => {
			setPost(data);
			setLoding(false);
		});
	}, []);

	return (
		<div>
			{loading ? (
				<div>Loading...</div>
			) : (
				<>
					<div>{post.title}</div>
					<div>{post.body}</div>
				</>
			)}
		</div>
	);
}
