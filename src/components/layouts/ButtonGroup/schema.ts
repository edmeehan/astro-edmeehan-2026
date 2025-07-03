import type { HTMLAttributes } from "astro/types";
import { z } from "zod/v4";

// Nested Schemas
const marginSchema = z.object({
  top: z
    .enum(["none", "xs", "sm", "md", "lg", "xl", "2xl"])
    .meta({ description: "Top margin of the button group." })
    .optional(),
  bottom: z
    .enum(["none", "xs", "sm", "md", "lg", "xl", "2xl"])
    .meta({ description: "Bottom margin of the button group." })
    .optional(),
});

// Create a type that extends HTMLAttributes for the div element
type ButtonGroupHTMLAttributes = HTMLAttributes<"div">;

export const buttonGroupSchema = z
  .object({
    direction: z
      .enum(["row", "column"])
      .meta({ description: "Direction of button layout." })
      .default("row"),

    align: z
      .enum(["start", "center", "end"])
      .meta({ description: "Alignment of buttons within the group." })
      .default("start"),

    gap: z
      .enum(["none", "xs", "sm", "md", "lg", "xl", "2xl"])
      .meta({ description: "Gap between buttons." })
      .optional(),

    margin: marginSchema.optional(),

    // Remove id, className, and customStyle from schema since they'll come from HTMLAttributes
  })
  .meta({
    title: "ButtonGroup",
    description: "A container for grouping multiple buttons with consistent spacing and alignment.",
  });

// Export a combined type that includes both our custom props and HTML attributes
export type ButtonGroupProps = z.infer<typeof buttonGroupSchema> & ButtonGroupHTMLAttributes;
