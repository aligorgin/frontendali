'use client';

export default function Page() {
	return <div>Open the Console</div>;
}

function whatIsThis() {
	const obj = {
		x: 1,
		f: function () {
			console.log(this.x);
		}
	};

	obj.f();

	const f = obj.f();
}

function executionOrder() {
	console.log(1);

	setTimeout(() => {
		console.log(2);
	}, 0);

	console.log(3);
}

function multipleGeneretor() {
	function f(n: number) {
		let counter = 1;
		return () => {
			const result = n * counter;
			counter++;
			return result;
		};
	}

	const f4 = f(3);

	console.log(f4());
	console.log(f4());
	console.log(f4());
	console.log(f4());
}

function factorial(n: number) {
	if (n < 0) return false;
	let result = 1;
	for (let i = 2; i <= n; i++) {
		result = result * i;
	}
	return result;
}

function isPowerOfTwo(n: number) {
	if (n < 1) return false;
	let dividedNumber = n;
	while (dividedNumber !== 1) {
		if (dividedNumber % 2 !== 0) {
			return false;
		}
		dividedNumber = dividedNumber / 2;
	}
	return true;
}

function twoSum(n: number[], target: number) {
	for (let i = 0; i < n.length; i++) {
		for (let j = i + 1; j < n.length; j++) {
			if (n[i] + n[j] === target) {
				return [n[i], n[j]];
			}
		}
	}
	return false;
}

function isEven(n: number) {
	if (n % 2 === 0) return true;
	return false;
}

function prime(n: number) {
	for (let i = 2; i < Math.sqrt(n); i++) {
		if (n % i === 0) {
			return false;
		}
	}
	return true;
}

function getMin(numbers: number[]) {
	let currentMin = numbers[0];
	for (let i = 0; i < numbers.length; i++) {
		if (numbers[i] < currentMin) {
			currentMin = numbers[i];
		}
	}
	return currentMin;
}

function sum(numbers: number[]) {
	let sum = 0;
	for (let i = 0; i < numbers.length; i++) {
		sum += numbers[i];
	}
	return sum;
}

function init() {
	let name = 'Mozilla'; // name is a local variable created by init
	function displayName() {
		// displayName() is the inner function, that forms the closure
		console.log(name); // use variable declared in the parent function
	}
	displayName();
}
init();

console.log(sum([2, 5, 1, 5]));
