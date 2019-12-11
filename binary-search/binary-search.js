'use strict';

// Complete this algo
// const binarySearch = (a, t, m = (Math.floor(a.length/2))) => {
// 	if (a[m] === t) {return true}
// 	if (t < a[m]) {
// 		a = a.slice(0, m)
// 		return binarySearch(a, t)
// 	}
// 	if (t > a[m]) {
// 		a = a.slice(m + 1)
// 		return binarySearch(a, t)
// 	}
// 	return false
// };

/*
	EXTRA CREDIT:

	Can you augment the function above to run in constant O(1) space?
	This means, you cannot edit/copy the original array!
	How can we use other pieces of data, like pointers, to avoid slicing?

*/
function binarySearch(arr, x, l=0, r=arr.length-1) {
	if (r<l) return false;
	let mid=Math.floor((l + r)/2);
	if (arr[mid]===x) return true;
	if(arr[mid] > x)
			return binarySearch(arr, x, l, mid-1);
	else
			return binarySearch(arr, x, mid+1, r);
}

module.exports = binarySearch
