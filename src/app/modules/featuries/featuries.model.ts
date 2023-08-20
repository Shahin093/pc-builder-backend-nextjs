import { Schema, Types, model } from "mongoose";
import { FeatureModel, IFeature } from "./featuries.interface";

//  Create a Schema corresponding to the document interface.
const booksSchema = new Schema<IFeature>(
  {
    image: {
      type: String,
      required: true,
    },
    categoryName: {
      type: String,
      required: true,
    },
    important: {
      type: Boolean,
      default: false,
    },

    product: {
      type: Types.ObjectId,
      ref: "FeatureProduct",
      required: true,
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
export const Feature = model<IFeature, FeatureModel>("Feature", booksSchema);
