import { Response } from 'express';
import IResponse from '../interfaces/response';

const sendResponse = <T>(res: Response, data: IResponse<T>) => {
    res.status(data?.statusCode).json({
        success: data?.success,
        statusCode: data?.statusCode,
        message: data?.message,
        token: data?.token,
        data: data?.data,
    });
};

export default sendResponse;
