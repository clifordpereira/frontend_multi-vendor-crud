// alias map
const typeMap: Record<string, string> = {
  i: "integer",
  int: "integer",
  integer: "integer",

  d: "date",
  date: "date",

  s: "string",
  string: "string",
  t: "string",
  text: "string",

  p: "password",
  password: "password",
};

function normalizeType(input: string): string {
  const key = input?.toLowerCase() || "";
  return typeMap[key] || key || "string";
}

export interface Column {
  name: string;
  type: string;
  constraints: string[];
}

export interface ParsedTable {
  name: string;
  columns: Column[];
}

export function useSchemaParser(schemaInput: Ref<string>) {
  const parsedTables = computed<ParsedTable[]>(() => {
    const lines = schemaInput.value
      .split("\n")
      .map((l) => l.trim())
      .filter((l) => l.length > 0 && l.includes(":"));

    return lines
      .map((line) => {
        const [tableName, colsRaw] = line.split(":").map((s) => s.trim());
        if (!tableName || !colsRaw) return null;

        const userColumns: Column[] = colsRaw
          .split(",")
          .map((c) => c.trim())
          .filter((c) => c.length > 0)
          .map((c) => {
            const parts = c.split(" ");
            return {
              name: parts[0] ?? "",
              type: normalizeType(parts[1] || "string"),
              constraints: parts.slice(2).map((s) => s.trim()),
            };
          });

        const idColumn: Column = {
          name: "id",
          type: "integer",
          constraints: [],
        };

        const createdAtColumn: Column = {
          name: "created_at",
          type: "date",
          constraints: [],
        };

        return {
          name: tableName,
          columns: [idColumn, ...userColumns, createdAtColumn],
        };
      })
      .filter((t): t is ParsedTable => t !== null);
  });

  return { parsedTables };
}
