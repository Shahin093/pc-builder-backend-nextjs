import express from "express";
import { FeatureProductRoutes } from "../modules/featureProduct/featureProduct.route";
import { FeatureRoutes } from "../modules/featuries/featuries.route";
const router = express.Router();
FeatureRoutes;
const moduleRoutes = [
  {
    path: "/featureProduct",
    route: FeatureProductRoutes,
  },
  {
    path: "/feature",
    route: FeatureRoutes,
  },
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
