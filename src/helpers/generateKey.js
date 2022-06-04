import { isPrime } from './isPrime'
import BigNumber from 'bignumber.js'

// generate random prime number between 1000 and 2000
export const generateKey = () => {
	while (true) {
		let key = Math.ceil(Math.random() * 1000 + 1000)
		if (isPrime(key)) return BigNumber(key)
	}
}
