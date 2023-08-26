import { useEffect, useState } from 'react';

export default function Post() {
	const [id, setId] = useState(1);

	return (
		<div className="flex flex-col">
			<button
				onClick={() => setId(Math.floor(Math.random() * 100))}
				className="rounded-md bg-blue-500 p-2"
			>
				show a different post
			</button>
			<PostBody id={id} />
		</div>
	);
}

function PostBody({ id }: { id: number }) {
	const [text, setText] = useState('');

	// useEffect not goof for fetching data :
	// -- caching
	// -- loading, error state (full)
	// -- controller thing
	// swr or react query does all of this instead of this use effec.

	// this abort contorlerr does not work well !

	useEffect(() => {
		const controller = new AbortController();

		fetch(`https://dummyjson.com/posts/${id}`)
			.then((res) => res.json())
			.then((data) => {
				setText(data.body);
			});

		return () => controller.abort();
	}, [id]);

	return <p>{text}</p>;
}
