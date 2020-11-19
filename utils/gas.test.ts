/* eslint-disable functional/no-expression-statement */
import test from 'ava'
import { ethgas, createFastestGasPriceFetcher } from './index'

test('exports undefined', async (t) => {
	const fastest = createFastestGasPriceFetcher(ethgas('ETHGAS-TOKEN'))
	const gasPrice = await fastest()
	console.log(gasPrice.toString())
	t.is(gasPrice.toString().length > 5, true)
})
