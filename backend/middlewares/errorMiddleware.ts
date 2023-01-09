import { Request, Response } from "express"

export const notFound = (req: Request, res: Response, next: (err?: Error | undefined) => void) => {
    const error = new Error(`Not found - ${req.originalUrl}`);
    res.status(404);
    next(error);
}

export const errorHandler = (err:any, req: Request, res: Response, next: (err?: Error | undefined) => void) => {
    const statusCode = res.statusCode === 200 ? 500 :res.statusCode;
    res.status(statusCode);
    res.json({
        message: err.message,
        stack: process.env.ENV === "production" ? null : err.stack,
    });
}