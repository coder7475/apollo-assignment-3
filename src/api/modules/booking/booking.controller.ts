/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
import httpStatus from 'http-status';
import catchAsync from '../../../utils/catchAsync';
import sendResponse from '../../../utils/sendResponse';
import BookingServices from './booking.service';

const createRental = catchAsync(async (req, res) => {
    const result = await BookingServices.makeBooking(req.body);
    console.log('🚀 ~ createRental ~ result:', result);
    const { createdAt, updatedAt, __v, ...data } = result.toObject();
    console.log('🚀 ~ createRental ~ data:', data);
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: 'Rental created successfully',
        data: data,
    });
});

const BookingController = {
    createRental,
};

export default BookingController;
