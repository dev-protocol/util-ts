/* eslint-disable functional/no-expression-statement */
import { providers } from 'ethers'

export async function mine(
	provider: providers.Web3Provider,
	count: number
): Promise<void> {
	const counter = Array.from(Array(count).keys())
	// eslint-disable-next-line functional/functional-parameters
	const mine = async (): Promise<void> => {
		await provider.send('evm_mine', [])
	}
	await Promise.all(counter.map(mine))
}
