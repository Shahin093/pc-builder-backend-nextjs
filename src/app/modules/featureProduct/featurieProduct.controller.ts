import { Request, Response } from "express";
import catchAsync from "../../../shared/catchAsync";
import httpStatus from "http-status";
import sendResponse from "../../../shared/sendResponse";
import { FeatureService } from "./featuries.service";

// create book
const createFeatureProduct = catchAsync(async (req: Request, res: Response) => {
  const { ...featureProductData } = req.body;

  const result = await FeatureService.createFeature(featureProductData);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "feature Product created Successfully",
    data: result,
  });
});

const getFeatures = catchAsync(async (req: Request, res: Response) => {
  const result = await FeatureService.getFeatures();
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "feature product provide Successfully",
    data: result,
  });
});

const updateProduct = catchAsync(async (req: Request, res: Response) => {
  const id = req.params.id;
  const result = await FeatureService.updateProduct(id);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "feature product updated Successfully",
    data: result,
  });
});

const getSingleProduct = catchAsync(async (req: Request, res: Response) => {
  const id = req.params.id;
  const result = await FeatureService.getSingleProduct(id);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "feature single product provide Successfully",
    data: result,
  });
});

const getCategoryWiseProducts = catchAsync(
  async (req: Request, res: Response) => {
    const id = req.params.id;
    const result = await FeatureService.getCategoryWiseProducts(id);
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: " products provide Successfully",
      data: result,
    });
  }
);

export const FeatureProductController = {
  createFeatureProduct,
  getSingleProduct,
  getFeatures,
  updateProduct,
  getCategoryWiseProducts,
};
