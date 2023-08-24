import test from 'ava'
import { whenNotError } from './whenNotError'

test(`Executes the passed function when the passed value is not Error.`, (t) => {
	const result = whenNotError(null, (v) => {
		t.is(v, null)
		return 'done'
	})
	t.is(result, 'done')
})

test(`Returns Error when the passed value is Error.`, (t) => {
	const err = new Error('ERROR')
	const result = whenNotError(err, () => true)
	t.is(result, err)
	t.is((result as Error).message, 'ERROR')
})
