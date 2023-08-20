import { z } from "zod";
const createFeatureProductZodSchema = z.object({
  body: z.object({
    productName: z.string({
      required_error: "productName is required",
    }),
    category: z.string({
      required_error: "category is Required",
    }),
    image: z.string({
      required_error: "image is Required",
    }),
    price: z.number({
      required_error: "price is Required",
    }),
    description: z.string({
      required_error: "description is required",
    }),
    key_feature: z.string({
      required_error: "key_feature is required",
    }),
    individual_rating: z.string({
      required_error: "individual_rating is required",
    }),
    average: z.string({
      required_error: "average is required",
    }),
    reviews: z.string({
      required_error: "reviews is required",
    }),
  }),
});

export const FeatureProductZodValidation = {
  createFeatureProductZodSchema,
};
