/* eslint-disable functional/no-expression-statement */
import test from 'ava'
import { ethGasStationFetcher } from './index'

test('get gas price', async (t) => {
	const fastest = ethGasStationFetcher('ETHGAS-TOKEN')
	const gasPrice = await fastest()
	console.log(gasPrice)
	t.is(gasPrice.length > 5, true)
})
