import { ObjectId } from "mongodb";
import { Feature } from "../featuries/featuries.model";
import { IFeatureProduct } from "./featureProduct.interface";
import { FeatureProduct } from "./featureProduct.model";
import { IFeature } from "../featuries/featuries.interface";

// create a book
const createFeature = async (
  payload: IFeatureProduct
): Promise<IFeatureProduct | null> => {
  const result = await FeatureProduct.create(payload);
  return result;
};

const getFeatures = async (): Promise<IFeatureProduct[] | null> => {
  const result = await FeatureProduct.find({});
  return result;
};

const updateProduct = async (id: string): Promise<IFeature | null> => {
  const findUser = await FeatureProduct.findOne({ _id: id });
  const result = await Feature.findOneAndUpdate(
    { _id: findUser?.feature },
    { product: id, important: true },
    {
      new: true,
    }
  );
  return result!;
};
const getSingleProduct = async (
  id: string
): Promise<IFeatureProduct | null> => {
  const result = await FeatureProduct.findOne({ _id: id });

  return result;
};

const getCategoryWiseProducts = async (
  id: string
): Promise<IFeatureProduct[] | null> => {
  console.log("id", id);
  const result = await FeatureProduct.find({ feature: id });
  console.log("result : ", result);
  return result;
};

export const FeatureService = {
  createFeature,
  getSingleProduct,
  getFeatures,
  updateProduct,
  getCategoryWiseProducts,
};
