import test from 'ava'
import { whenNotErrorAll } from './whenNotErrorAll'

test(`Executes the passed function when the passed array's values are not Error all.`, (t) => {
	const result = whenNotErrorAll(
		['', 0, [], false, 'false', '0'],
		([empty, zero, arr, f, strF, str0]) => {
			t.is(empty, '')
			t.is(zero, 0)
			t.deepEqual(arr, [])
			t.is(f, false)
			t.is(strF, 'false')
			t.is(str0, '0')
			return 'done'
		}
	)
	t.is(result, 'done')
})

test(`Returns Error when the passed array's includes Error.`, (t) => {
	const err = new Error('ERROR')
	const result = whenNotErrorAll(['', 0, [], false, err], () => true)
	t.is(result, err)
	t.is((result as Error).message, 'ERROR')
})

test(`Returns the first Error if the passed array includes multiple errors.`, (t) => {
	const err1 = new Error('ERROR1')
	const err2 = new Error('ERROR2')
	const err3 = new Error('ERROR3')
	const result = whenNotErrorAll(
		['', err1, [], err2, undefined, err3],
		() => true
	)
	t.is(result, err1)
	t.is((result as Error).message, 'ERROR1')
})
