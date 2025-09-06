/**
 * Dynamically generates a Zod validation schema from a list of field definitions.
 *
 * Example:
 *  const fields = [
 *    { name: "name", type: "string", required: true },
 *    { name: "age", type: "number" }
 *  ];
 *  const schema = useDynamicZodSchema(fields);
 */

import { z } from "zod";

export function useDynamicZodSchema(
  fields: { name: string; type: string; required?: boolean }[]
) {
  const validators: Record<string, any> = {};

  fields.forEach((field) => {
    if (field.type === "string") {
      validators[field.name] = field.required
        ? z.string().min(1, `${field.name} is required`)
        : z.string().optional();
    } else if (field.type === "number") {
      validators[field.name] = field.required
        ? z.number()
        : z.number().optional();
    } else if (field.type === "date") {
      validators[field.name] = field.required
        ? z.string().datetime()
        : z.string().datetime().optional();
    } else if (field.type === "boolean") {
      validators[field.name] = z.boolean().optional();
    }
  });

  return z.object(validators);
}
