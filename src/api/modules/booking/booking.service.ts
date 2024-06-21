/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-unused-vars */
import Bike from '../bike/bike.model';
import { RentalInfo } from './booking.interface';
import Booking from './booking.model';
import diff_hours from './booking.utils';

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

// return bike service
const returnBike = async (id: string, user: Partial<RentalInfo>) => {
    // find the info needed to calculate totalCost
    const rentalInfo = await Booking.findById(id)
        .populate('bikeId')
        .lean()
        .exec();
    const returnTime = new Date();
    const rentHours = diff_hours(returnTime, rentalInfo?.startTime as Date);
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    //@ts-ignore
    const totalCost = rentHours * rentalInfo?.bikeId?.pricePerHour;
    // update the booking info
    const updatedInfo = {
        returnTime: returnTime,
        totalCost: totalCost,
        isReturned: true,
    };

    const result = await Booking.findByIdAndUpdate(id, updatedInfo, {
        new: true,
    })
        .select({
            _id: 1,
            userId: 1,
            bikeId: 1,
            startTime: 1,
            returnTime: 1,
            totalCost: 1,
            isReturned: 1,
        })
        .lean()
        .exec();

    // change the bike available to true
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    //@ts-ignore
    const bikeId = rentalInfo?.bikeId?._id;
    const bike = await Bike.findByIdAndUpdate(
        bikeId,
        { isAvailable: true },
        {
            new: true,
        },
    );
    return result;
};

// get all users bike rentals - Bookings
const myBikes = async (id: string) => {
    const allMyBikes = await Booking.find({
        userId: id,
    })
        .select({
            _id: 1,
            userId: 1,
            bikeId: 1,
            startTime: 1,
            returnTime: 1,
            totalCost: 1,
            isReturned: 1,
        })
        .lean()
        .exec();

    return allMyBikes;
};

const BookingServices = {
    makeBooking,
    returnBike,
    myBikes,
};

export default BookingServices;
