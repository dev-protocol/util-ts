/* eslint-disable functional/no-expression-statement */
import urljoin from 'url-join'
import axios from 'axios'

export const getTextUrls = async (
	url: string
): Promise<readonly [boolean, readonly string[]]> => {
	const programmableProxyUrl: string = urljoin(
		'https://programmable-proxy.azureedge.net',
		`?s=${url}?tweet.fields=entities`
	)
	const res = await axios.get(programmableProxyUrl)
	const isStatusGreen = res.status === 200
	const urls = isStatusGreen ? res.data.data.entities.urls : []
	const expandedUrls = urls.map((info: { readonly expanded_url: string }) => {
		return info.expanded_url
	})
	const unwoundUrls = urls.map((info: { readonly unwound_url: string }) => {
		return info.unwound_url
	})
	return [isStatusGreen, Array.from(new Set(expandedUrls.concat(unwoundUrls)))]
}
