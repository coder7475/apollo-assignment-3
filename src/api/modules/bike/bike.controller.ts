import httpStatus from 'http-status';
import catchAsync from '../../../utils/catchAsync';
import sendResponse from '../../../utils/sendResponse';
import BikeServices from './bike.service';

const createBike = catchAsync(async (req, res) => {
    const bike = await BikeServices.addNewBike(req.body);

    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: 'Bike added successfully',
        data: bike,
    });
});

const BikeController = {
    createBike,
};

export default BikeController;
