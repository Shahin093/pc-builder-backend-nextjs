import { IFeature } from "./featuries.interface";
import { Feature } from "./featuries.model";

// create a book
const createFeature = async (payload: IFeature): Promise<IFeature | null> => {
  const result = await Feature.create(payload);
  return result;
};

const getFeatures = async (): Promise<IFeature[] | null> => {
  const result = await Feature.find({}).populate("product");
  return result;
};

export const FeatureService = {
  createFeature,
  getFeatures,
};
