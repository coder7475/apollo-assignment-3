/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
import httpStatus from 'http-status';
import catchAsync from '../../../utils/catchAsync';
import sendResponse from '../../../utils/sendResponse';
import BikeServices from './bike.service';

// create bike
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

// find all bikes
const allBikes = catchAsync(async (req, res) => {
    const bikes = await BikeServices.getAllBikes();
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: 'Bikes retrieved successfully',
        data: bikes,
    });
});

// update a bike data
const updateBike = catchAsync(async (req, res) => {
    const id = req.params.id;
    const updatedBike = await BikeServices.updateBike(id, req.body);

    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: 'Bike updated successfully',
        data: updatedBike,
    });
});

const BikeController = {
    createBike,
    allBikes,
    updateBike,
};

export default BikeController;
