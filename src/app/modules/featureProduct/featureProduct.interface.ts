import { Model, Types } from "mongoose";
import { IFeature } from "../featuries/featuries.interface";

export type IFeatureProduct = {
  productName: string;
  category: string;
  image: string;
  status: boolean;
  price: number;
  description: string;
  key_feature: string;
  individual_rating: string;
  average: string;
  reviews: string;
  feature: Types.ObjectId | IFeature;
  important?: boolean;
};

export type FeatureProductModel = Model<
  IFeatureProduct,
  Record<string, unknown>
>;
