/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable functional/functional-parameters */
import bent from 'bent'
import { utils } from 'ethers'

type EGSResponse = {
	readonly fast: number
	readonly fastest: number
	readonly safeLow: number
	readonly average: number
	readonly block_time: number
	readonly blockNum: number
	readonly speed: number
	readonly safeLowWait: number
	readonly avgWait: number
	readonly fastWait: number
	readonly fastestWait: number
}

const createEGSFetcher = (
	fetcher: bent.RequestFunction<bent.ValidResponse>
) => async (): Promise<EGSResponse> =>
	fetcher('').then((r: unknown) => (r as unknown) as EGSResponse)

export const ethGasStationFetcher = (token: string) =>
	((egs) => async () =>
		egs().then((res) =>
			utils.parseUnits(`${res.fastest / 10}`, 'gwei').toString()
		))(
		createEGSFetcher(
			bent(
				`https://ethgasstation.info/api/ethgasAPI.json?api-key=${token}`,
				'json'
			)
		)
	)
