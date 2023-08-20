import { Request, Response } from "express";
import catchAsync from "../../../shared/catchAsync";
import httpStatus from "http-status";
import sendResponse from "../../../shared/sendResponse";
import { FeatureService } from "./featuries.service";

// create book
const createFeature = catchAsync(async (req: Request, res: Response) => {
  const { ...featureData } = req.body;

  const result = await FeatureService.createFeature(featureData);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "feature created Successfully",
    data: result,
  });
});

const getFeatures = catchAsync(async (req: Request, res: Response) => {
  const result = await FeatureService.getFeatures();

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "feature retrieve Successfully",
    data: result,
  });
});

// const getFeatures = catchAsync(async (req: Request, res: Response) => {
//   const { ...bookData } = req.body;

//   const result = await FeatureService.getFeatures(bookData);

//   sendResponse(res, {
//     statusCode: httpStatus.OK,
//     success: true,
//     message: "features retrived Successfully",
//     data: result,
//   });
// });

export const FeatureController = {
  createFeature,
  getFeatures,
};
