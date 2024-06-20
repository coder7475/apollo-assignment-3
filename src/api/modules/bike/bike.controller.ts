/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
import httpStatus from 'http-status';
import catchAsync from '../../../utils/catchAsync';
import sendResponse from '../../../utils/sendResponse';
import BikeServices from './bike.service';

const createBike = catchAsync(async (req, res) => {
    const bike = await BikeServices.addNewBike(req.body);
    const { createdAt, updatedAt, __v, ...data } = bike;
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: 'Bike added successfully',
        data,
    });
});

const BikeController = {
    createBike,
};

export default BikeController;
