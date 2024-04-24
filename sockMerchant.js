const sockMerchant = (n, arr) => {
	// Tracks the count of unique colors
	const colorCount = {};

	// Tracks the count of each pair of socks
	let pairCount = 0;

	// Group unique colors together
	for (let i = 0; i < n; ++i) {
		const currentColor = arr[i];
		if (colorCount[currentColor])
			// Check if color exists in a group then increment by 1
			colorCount[currentColor]++;
		// Else, initiaize the color to one
		else colorCount[currentColor] = 1;
  }
  

	// Count the number of pairs available
	for (const pair of Object.values(colorCount))
		pairCount += Math.floor(Number(pair) / 2);

	return pairCount;
};

// Sample Input
const n = 9;
const arr = [10, 20, 20, 10, 10, 30, 50, 10, 20];

console.log(sockMerchant(n, arr));
