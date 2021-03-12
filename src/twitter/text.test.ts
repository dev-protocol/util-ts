/* eslint-disable @typescript-eslint/no-non-null-assertion */
/* eslint-disable functional/immutable-data */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable functional/no-let */
/* eslint-disable functional/prefer-readonly-type */
import test from 'ava'
import sinon from 'sinon'
import { getTextUrls } from './text'
import axios, { AxiosRequestConfig } from 'axios'

let get: sinon.SinonStub<
	[url: string, config?: AxiosRequestConfig | undefined],
	Promise<unknown>
>

test.before(() => {
	get = sinon.stub(axios, 'get')
	get
		.withArgs(
			'https://programmable-proxy.azureedge.net?s=http://hogehoge1&tweet.fields=entities'
		)
		.resolves({
			status: 200,
			data: {
				data: {
					entities: {
						urls: [
							{ expanded_url: 'https://qqqq', unwound_url: 'https://qqqq' },
						],
					},
				},
			},
		})
	get
		.withArgs(
			'https://programmable-proxy.azureedge.net?s=http://hogehoge2&tweet.fields=entities'
		)
		.resolves({
			status: 200,
			data: {
				data: {
					entities: {
						urls: [
							{ expanded_url: 'https://qqqq', unwound_url: 'https://qqqq' },
							{ expanded_url: 'https://iiii', unwound_url: 'https://iiii' },
						],
					},
				},
			},
		})
	get
		.withArgs(
			'https://programmable-proxy.azureedge.net?s=http://hugahuga&tweet.fields=entities'
		)
		.resolves({ status: 400, data: { error: 'error message' } })
})
test('api is sccessed.', async (t) => {
	const [isStatusGreen, urls] = await getTextUrls('http://hogehoge1')
	t.is(isStatusGreen, true)
	t.is(urls[0], 'https://qqqq')
})
test('When multiple URLs are included.', async (t) => {
	const [isStatusGreen, urls] = await getTextUrls('http://hogehoge2')
	t.is(isStatusGreen, true)
	t.is(urls[0], 'https://qqqq')
	t.is(urls[1], 'https://iiii')
})
test('api is failed.', async (t) => {
	const [isStatusGreen, urls] = await getTextUrls('http://hugahuga')
	t.is(isStatusGreen, false)
	t.is(urls.length, 0)
})
test.after(() => {
	get.restore()
})
