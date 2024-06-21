/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
import httpStatus from 'http-status';
import catchAsync from '../../../utils/catchAsync';
import sendResponse from '../../../utils/sendResponse';
import BookingServices from './booking.service';

const createRental = catchAsync(async (req, res) => {
    const result = await BookingServices.makeBooking(req.body);
    const { createdAt, updatedAt, __v, ...data } = result.toObject();
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: 'Rental created successfully',
        data: data,
    });
});

// return bike after use
const returnBike = catchAsync(async (req, res) => {
    const bookingId = req.params.id;
    const user = req.body;
    const result = await BookingServices.returnBike(bookingId, user);

    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: 'Bike returned successfully',
        data: result,
    });
});

// all rentals of logged in user
const myRentals = catchAsync(async (req, res) => {
    const { userId } = req.body;
    const result = await BookingServices.myBikes(userId);

    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: 'Rentals retrieved successfully',
        data: result,
    });
});

const BookingController = {
    createRental,
    returnBike,
    myRentals,
};

export default BookingController;
