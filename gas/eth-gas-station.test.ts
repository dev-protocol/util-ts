/* eslint-disable functional/no-let */
/* eslint-disable functional/no-expression-statement */
import test from 'ava'
import { ethGasStationFetcher } from './index'

test('get fastest gas price', async (t) => {
	let fastest = ethGasStationFetcher('ETHGAS-TOKEN')
	let gasPrice = await fastest()
	console.log(gasPrice)
	t.is(gasPrice.length > 5, true)
	fastest = ethGasStationFetcher('ETHGAS-TOKEN', 'fastest')
	gasPrice = await fastest()
	console.log(gasPrice)
	t.is(gasPrice.length > 5, true)
})

test('get fast gas price', async (t) => {
	const fast = ethGasStationFetcher('ETHGAS-TOKEN', 'fast')
	const gasPrice = await fast()
	console.log(gasPrice)
	t.is(gasPrice.length > 5, true)
})

test('get average gas price', async (t) => {
	const average = ethGasStationFetcher('ETHGAS-TOKEN', 'average')
	const gasPrice = await average()
	console.log(gasPrice)
	t.is(gasPrice.length > 5, true)
})

test('get safeLow gas price', async (t) => {
	const safeLow = ethGasStationFetcher('ETHGAS-TOKEN', 'safeLow')
	const gasPrice = await safeLow()
	console.log(gasPrice)
	t.is(gasPrice.length > 5, true)
})
