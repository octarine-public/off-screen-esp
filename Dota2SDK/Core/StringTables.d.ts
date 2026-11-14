// AUTO-GENERATED - do not edit.
/**
 * The string tables the server has sent, by table name. An entry of a table is its string and its
 * data bytes, `[string, ArrayBuffer]`, under the entry's index. Use the `StringTables` instance.
 */
declare class CStringTablesManager {
	/** How many tables are held. */
	public get Size(): number
	/**
	 * A table's entries by index, or `undefined` when no table of that name has arrived. The map
	 * is the manager's own: read it, do not modify it.
	 */
	public GetTable(tableName: string): Map<number, [string, ArrayBuffer]> | undefined
	/** An entry's data bytes read as UTF-8 text; `""` when the table or the entry is missing. */
	public GetValue(tableName: string, index: number): string
	/** An entry's string; `""` when the table or the entry is missing. */
	public GetString(tableName: string, index: number): string
	/**
	 * Writes the entries of `update` into the table `name`, creating the table when it is new;
	 * entries `update` does not carry stay as they were. The SDK calls this on its
	 * `UpdateStringTable` event.
	 */
	public UpdateStringTable(name: string, update: Map<number, [string, ArrayBuffer]>): void
	/** Drops every table. The SDK calls this on its `RemoveAllStringTables` event. */
	public RemoveAllStringTables(): void
}
/** The SDK's own {@link CStringTablesManager}, kept from the server's string-table messages. */
declare const StringTables: CStringTablesManager
