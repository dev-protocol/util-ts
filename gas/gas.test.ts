/* eslint-disable functional/no-expression-statement */
import test from 'ava'
import { getFastGasPrice } from './index'

test('get gas price', async (t) => {
	const gasPrice = await getFastGasPrice('ETHGAS-TOKEN')
	console.log(gasPrice.toString())
	t.is(gasPrice.toString().length > 5, true)
})
