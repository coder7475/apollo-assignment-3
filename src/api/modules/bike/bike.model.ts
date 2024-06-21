import { Schema, model } from 'mongoose';
import IBike from './bike.interface';

const bikeSchema = new Schema(
    {
        name: {
            type: String,
            required: true,
            trim: true,
            unique: true,
        },
        description: {
            type: String,
            required: true,
        },
        pricePerHour: {
            type: Number,
            required: true,
        },
        isAvailable: {
            type: Boolean,
            required: true,
            default: true,
        },
        cc: {
            type: Number,
            required: true,
        },
        year: {
            type: Number,
            required: true,
        },
        model: {
            type: String,
            required: true,
        },
        brand: {
            type: String,
            required: true,
        },
    },
    {
        timestamps: true,
    },
);

const Bike = model<IBike>('Bike', bikeSchema);

export default Bike;
