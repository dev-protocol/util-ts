/* eslint-disable @typescript-eslint/explicit-function-return-type */

export type UndefinedOr<R> = undefined | R
export type ErrorOr<T> = Error | T
export type NotError<T> = Exclude<T, Error>
