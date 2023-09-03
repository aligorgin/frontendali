// 'use client'
// if you import it to another compoennt that have 'use client' you dont need to
// make it client in this component, like tree hierarchy

import { useEffect, useState } from 'react';

export default function ServerComponent() {
	// we can't use these in server component:
	// because server has not access to broweser, window ..

	// useState();
	// useEffect();
	// window.alert();
	// localStorage.getItem('item');

	return <div>server example component</div>;
}
