import { z } from "zod";

export const productSchema = z.object({
  name: z.string().min(1, "Product name is required"),
  description: z.string().min(10, "Description should be at least 10 characters"),
  price: z
    .union([z.string(), z.number()])
    .transform((val) => Number(val))
    .refine((num) => !isNaN(num) && num > 0, {
      message: "Price must be a positive number",
    }),
  discount: z
    .union([z.string(), z.number()])
    .transform((val) => Number(val))
    .default(0)
    .refine((num) => !isNaN(num) && num >= 0, {
      message: "Discount must be a non-negative number",
    }),
  packs: z.array(z.string()).nonempty("At least one pack size is required"),
  about: z.array(z.string()).nonempty("At least one 'about' detail is required"),
  features: z.array(z.string()).nonempty("At least one feature is required"),
  images: z
    .array(z.string().url("Invalid image URL"))
    .nonempty("At least one image is required"),
});

export type ProductType = z.infer<typeof productSchema>;
