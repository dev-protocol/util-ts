import { NotError } from '../types/types'

export const isNotError = <T>(t: T): t is NotError<T> =>
	t instanceof Error ? false : true
