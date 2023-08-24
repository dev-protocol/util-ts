import test from 'ava'
import { isNotError } from './isNotError'

test('Returns false when the passed value is Error', (t) => {
	t.false(isNotError(new Error()))
})

test('Returns true when the passed value is not Error', (t) => {
	t.true(isNotError(undefined))
})
