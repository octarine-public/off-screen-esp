// AUTO-GENERATED - do not edit.
interface NetHttpResult {
	status: number
	statusText: string
	/** The URL that finally answered, which is not the requested one after a redirect. */
	url: string
	headers: [string, string][]
	body: ArrayBuffer
	/** Empty when the request reached a server; otherwise why it did not. */
	error: string
	errorCode: number
}
