import { Schema, model } from 'mongoose';
import IBooking from './booking.interface';

const bookingSchema = new Schema(
    {
        userId: {
            type: String,
            ref: 'User',
            required: true,
        },
        bikeId: {
            type: String,
            ref: 'Bike',
            required: true,
        },
        startTime: {
            type: Date,
            required: true,
        },
        returnTime: {
            type: Date,
            default: null,
        },
        totalCost: {
            type: Number,
            default: 0,
        },
        isReturned: {
            type: Boolean,
            default: false,
        },
    },
    {
        timestamps: true,
    },
);

const Booking = model<IBooking>('Booking', bookingSchema);

export default Booking;
