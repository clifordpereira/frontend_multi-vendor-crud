/**
 * Extracts table names from schema text
 * @param schemaText - multiline string defining tables
 * @returns array of table names
 */
export function extractTables(schemaText?: string): string[] {
  if (!schemaText) return [];

  // Split by lines, trim whitespace
  const lines = schemaText.split(/\n|,/).map((line) => line.trim());

  // Collect table names
  const tables: string[] = [];

  for (const line of lines) {
    // Match lines starting with table name followed by ":"
    const match = line.match(/^([a-zA-Z0-9_]+)\s*:/);
    if (match && match[1]) {
      tables.push(match[1]);
    }
  }

  return tables;
}
