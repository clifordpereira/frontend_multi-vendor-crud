// utils/extractTables.ts
/**
 * Extracts table names from schema text.
 * Supports formats like "users:" or "posts {".
 */
export function extractTables(schemaText?: string): string[] {
  if (!schemaText) return [];

  const lines = schemaText.split(/\r?\n|,/).map((line) => line.trim());
  const tables: string[] = [];

  for (const line of lines) {
    const match = line.match(/^([a-zA-Z_][a-zA-Z0-9_]*)\s*[:{]/);
    if (match && match[1]) tables.push(match[1]);
  }

  return tables;
}
