/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-unused-vars */
import Bike from '../bike/bike.model';
import { RentalInfo } from './booking.interface';
import Booking from './booking.model';

const makeBooking = async (info: RentalInfo) => {
    // make isAvailable false
    await Bike.findByIdAndUpdate(info?.bikeId, {
        isAvailable: false,
    });
    // create a rental
    const { exp, iat, role, email, ...rentalData } = info;
    const result = await Booking.create(rentalData);

    return result;
};

const BookingServices = {
    makeBooking,
};

export default BookingServices;
