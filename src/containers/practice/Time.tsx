// 'use client'
// if you import it to another compoennt that have 'use client' you dont need to
// make it client in this component, like tree hierarchy

import { useEffect, useState } from 'react';

export default function Time() {
	const [currentTime, setCurrentTime] = useState(new Date());

	useEffect(() => {
		const interval = setInterval(() => {
			setCurrentTime(new Date());
		}, 1000);

		return () => clearInterval(interval);
	}, []);

	const hours = currentTime.getHours();
	const minutes = currentTime.getMinutes();
	const second = currentTime.getSeconds();

	return (
		<div>
			<div>Date is : {currentTime.toLocaleDateString()}</div>
			<div>
				<span>Time is : </span>
				<span>
					<span>
						{hours < 10 ? '0' : ''}
						{hours}:
					</span>
					<span>
						{minutes < 10 ? '0' : ''}
						{minutes}:
					</span>
					<span>
						{second < 10 ? '0' : ''}
						{second}
					</span>
				</span>
			</div>
		</div>
	);
}
