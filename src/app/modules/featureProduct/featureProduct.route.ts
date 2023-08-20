import express from "express";
import zodValidateRequest from "../../middleware/zodValidateRequest";
import { FeatureProductZodValidation } from "./featureProduct.zodValidation";
import { FeatureProductController } from "./featurieProduct.controller";

const router = express.Router();
router.get("/", FeatureProductController.getFeatures);
router.get(
  "/category-product/:id",
  FeatureProductController.getCategoryWiseProducts
);
router.get("/product/:id", FeatureProductController.getSingleProduct);
router.post(
  "/create-featureProduct",
  zodValidateRequest(FeatureProductZodValidation.createFeatureProductZodSchema),
  FeatureProductController.createFeatureProduct
);

router.patch("/update-product/:id", FeatureProductController.updateProduct);

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
// "feature":""
// }

export const FeatureProductRoutes = router;
