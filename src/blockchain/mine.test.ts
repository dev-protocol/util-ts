/* eslint-disable functional/no-let */
/* eslint-disable functional/no-expression-statement */
import test from 'ava'
import { mine } from './mine'
import { MockProvider } from 'ethereum-waffle'

test('get fastest gas price', async (t) => {
	const provider = new MockProvider()
	const block = await provider.getBlockNumber()
	await mine(provider, 5)
	const lastBlock = await provider.getBlockNumber()
	t.is(block + 5, lastBlock)
})
