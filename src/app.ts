import express, { NextFunction, Request, Response } from "express";
import createError from "http-errors";

import mainRouter from "./router/mainRouter"

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Routes
app.use("/", mainRouter);

// catch 404 and forward to error handler
app.use((req: Request, res: Response, next: NextFunction) => {
  next(createError(404));
});

interface IError {
  status?: number;
  message?: string;
}

// error handler
app.use((err: IError, req: Request, res: Response, next: NextFunction) => {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};
  // render the error page
  res.status(err.status || 500);
  // res.render("error");
});

export default app;