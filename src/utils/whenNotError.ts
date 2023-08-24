import { cond, always, T } from 'ramda'
import { ErrorOr, NotError } from '../types/types'
import { isNotError } from './isNotError'

export const whenNotError = <D, F>(
	depends: D,
	fn: (d: NotError<D>) => F
): ErrorOr<F> =>
	cond([
		[isNotError, fn],
		// eslint-disable-next-line @typescript-eslint/no-explicit-any
		[T, always(depends as any)],
		// eslint-disable-next-line @typescript-eslint/no-explicit-any
	])(depends as any)
