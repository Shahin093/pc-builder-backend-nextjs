import cors from "cors";
import express, { Application, NextFunction, Request, Response } from "express";
// import globalErrorHandler from './app/modules/users/middleware/globalErrorHandler';
// import routes from './app/routes';

import httpStatus from "http-status";
const app: Application = express();
import cookieParser from "cookie-parser";
import globalErrorHandler from "./app/middleware/globalErrorHandler";
import router from "./app/routes";
// import routers from "./app/routes";

app.use(cors());
app.use(cookieParser());

// parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/v1/", router);

app.use((req: Request, res: Response, next: NextFunction) => {
  res.status(httpStatus.NOT_FOUND).json({
    success: false,
    message: "Not Found",
    errorMassages: [
      {
        path: req.originalUrl,
        message: "Api Not Found",
      },
    ],
  });
  next();
});

// global error handler
app.use(globalErrorHandler);

export default app;
