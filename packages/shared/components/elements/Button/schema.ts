import { z } from "zod/v4";

export const buttonSchema = z.object({
  label: z
    .string()
    .meta({ description: "The text that goes inside the button." }),
  link: z
    .string()
    .meta({ description: "The URL that the button should link to." })
    .optional(),
  iconName: z
    .string()
    .meta({
      description:
        "The name of the icon to display. See the Icon component documentation for more information.",
    })
    .optional(),
  iconPosition: z
    .enum(["before", "after"])
    .meta({ description: "The position of the icon relative to the label." })
    .default("before"),

  iconDisplay: z
    .enum(["icon_only", "all"])
    .meta({ description: "The display mode of the icon." })
    .default("all"),

  type: z
    .enum(["primary", "secondary", "ghost", "contrast", "fade"])
    .meta({ description: "The presentation of button." })
    .default("ghost"),

  size: z
    .enum(["sm", "md", "lg"])
    .meta({ description: "The size of the button." })
    .default("md"),
  layout: z
    .enum(["full", "skinny"])
    .meta({ description: "The layout of the button." })
    .default("full"),
  outline: z
    .boolean()
    .meta({ description: "Whether the button should have an outline." })
    .default(false),

  id: z
    .string()
    .meta({ description: "The ID attribute for the button element." })
    .optional(),
  className: z
    .string()
    .meta({
      description: "Additional CSS classes to add to the button element.",
    })
    .default(""),
  customStyle: z
    .string()
    .meta({ description: "Inline CSS styles to apply to the button element." })
    .default(""),
  ariaLabel: z
    .string()
    .meta({ description: "Accessibility label for the button." })
    .optional(),
  ariaDescribedby: z
    .string()
    .meta({ description: "ID of an element that describes the button." })
    .optional(),
  ariaExpanded: z
    .boolean()
    .meta({
      description: "Indicates whether a control is expanded or collapsed.",
    })
    .optional(),
  ariaControls: z
    .string()
    .meta({ description: "ID of an element controlled by the button." })
    .optional(),
  disabled: z
    .boolean()
    .meta({ description: "Whether the button is disabled." })
    .default(false),
});

export type ButtonProps = z.infer<typeof buttonSchema>;
