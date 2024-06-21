import httpStatus from 'http-status';
import catchAsync from '../../../utils/catchAsync';
import sendResponse from '../../../utils/sendResponse';

const createRental = catchAsync(async (req, res) => {
    // const info = req.body;

    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: 'Rental created successfully',
        data: req.body,
    });
});

const BookingController = {
    createRental,
};

export default BookingController;
