import BigNumber from 'bignumber.js'

export const calculateFullKey = (
	alienPartialKey,
	selfPrivateKey,
	secondPublicKey
) => {
	return BigNumber(alienPartialKey).pow(selfPrivateKey).mod(secondPublicKey)
}

export const calculatePartialKey = (
	firstPublicKey,
	selfPrivateKey,
	secondPublicKey
) => {
	return BigNumber(firstPublicKey).pow(selfPrivateKey).mod(secondPublicKey)
}
