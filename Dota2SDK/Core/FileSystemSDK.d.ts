// AUTO-GENERATED - do not edit.
/**
 * Redirects the game's reads of its own files to files on disk while redirects are on: each list
 * maps the game's paths to the files that stand in for them.
 * @example
 * const handle = FileSystemSDK.AddRedirectList("my-mod", {
 * 	"materials/blends/mod_dire_000.vmat_c": file
 * })
 * FileSystemSDK.EnableRedirects(true)
 */
declare class CFileSystem {
	/**
	 * Adds `redirects`, game path to file on disk, as a list called `name`; answers the handle
	 * `RemoveRedirectList` takes.
	 */
	public AddRedirectList(name: string, redirects: {
		readonly [path: string]: string
	}): number
	/** Removes the list `handle` names. */
	public RemoveRedirectList(handle: number): void
	/** Turns the redirects of every list on or off. */
	public EnableRedirects(enable: boolean): void
}
/** The redirects of the game's file reads. */
declare const FileSystemSDK: CFileSystem
