import { z } from "zod";
const createFeatureZodSchema = z.object({
  body: z.object({
    categoryName: z.string({
      required_error: "category Name is required",
    }),
  }),
});

export const FeatureZodValidation = {
  createFeatureZodSchema,
};
