import { Schema, Types, model } from "mongoose";
import {
  FeatureProductModel,
  IFeatureProduct,
} from "./featureProduct.interface";

//  Create a Schema corresponding to the document interface.
const featureProductSchema = new Schema<IFeatureProduct>(
  {
    productName: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    key_feature: {
      type: String,
      required: true,
    },
    average: {
      type: String,
    },
    reviews: {
      type: String,
    },
    individual_rating: {
      type: String,
    },
    status: {
      type: Boolean,
      default: false,
    },
    feature: {
      type: Types.ObjectId,
      ref: "Feature",
      required: true,
    },
    important: {
      type: String,
      default: false,
    },
  },
  {
    timestamps: true,
    toJSON: {
      virtuals: true,
    },
  }
);

// 3. Create a Model.
export const FeatureProduct = model<IFeatureProduct, FeatureProductModel>(
  "FeatureProduct",
  featureProductSchema
);
