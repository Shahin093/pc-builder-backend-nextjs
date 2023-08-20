import express from "express";
import zodValidateRequest from "../../middleware/zodValidateRequest";
import { FeatureZodValidation } from "./featuries.zodValidation";
import { FeatureController } from "./featuries.controller";

const router = express.Router();
router.get("/", FeatureController.getFeatures);
router.post(
  "/create-feature",
  zodValidateRequest(FeatureZodValidation.createFeatureZodSchema),
  FeatureController.createFeature
);

// {
//   "image":"http",
//   "productName":"CPU",
//   "category":"havvy",
//   "status":true,
//   "price":500,
//   "description":"This is good devices",
//   "key_feature":"kdjfkd",
//   "individual_rating":"4",
//   "average":"thats good ",
//   "reviews": "this goods"
// }

export const FeatureRoutes = router;
