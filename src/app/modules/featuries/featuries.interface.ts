import { Model, Types } from "mongoose";
import { IFeatureProduct } from "../featureProduct/featureProduct.interface";

export type IFeature = {
  image: string;
  categoryName: string;
  important: boolean;
  product: Types.ObjectId | IFeatureProduct;
};

export type FeatureModel = Model<IFeature, Record<string, unknown>>;
