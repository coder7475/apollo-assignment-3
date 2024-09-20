interface IResponse<T> {
    statusCode: number;
    success: boolean;
    message?: string;
    token?: string;
    data: T;
}

export default IResponse;
