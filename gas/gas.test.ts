/* eslint-disable functional/no-expression-statement */
import test from 'ava'
import { getFastGasPrice, createFastestGasPriceFetcher, ethgas } from './index'

test('get gas price', async (t) => {
	const gasPrice = await getFastGasPrice('ETHGAS-TOKEN')
	console.log(gasPrice)
	t.is(gasPrice.length > 5, true)
})
test('get gas price fetch', async (t) => {
	const fastest = createFastestGasPriceFetcher(ethgas('ETHGAS-TOKEN'))
	const gasPrice = await fastest()
	console.log(gasPrice)
	t.is(gasPrice.length > 5, true)
})
