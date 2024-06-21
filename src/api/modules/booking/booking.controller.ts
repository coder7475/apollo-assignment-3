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

const returnBike = catchAsync(async (req, res) => {
    const bookingId = req.params.id;
    const user = req.body;
    const result = await BookingServices.returnBike(bookingId, user);
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: 'Bike returned successfully',
        data: user,
    });
});

const BookingController = {
    createRental,
    returnBike,
};

export default BookingController;
