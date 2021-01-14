import test from 'ava'
import { toBigNumber } from './toBigNumber'

test('Can convert numbers and strings to BigNumber.', (t) => {
	const value1 = toBigNumber(5)
	const value2 = toBigNumber('5')
	const value3 = toBigNumber(value1)
	t.is(value1.toString(), value2.toString())
	t.is(value3.toString(), value2.toString())
})
