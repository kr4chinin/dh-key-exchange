export const isPrime = num => {
	let flag = true
	if (num === 4) {
		return false
	}
	for (let i = 2; i < Math.sqrt(num); i++) {
		if (num % i === 0) {
			flag = false
			break
		}
	}
	return flag
}
