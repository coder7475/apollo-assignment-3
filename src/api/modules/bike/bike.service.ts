import IBike from './bike.interface';
import Bike from './bike.model';

// add new bike
const addNewBike = async (bikeData: IBike) => {
    const result = await Bike.create(bikeData);
    return result.toObject();
};

// get all bikes
const getAllBikes = async () => {
    const allBikes = await Bike.find()
        .select({
            _id: 1,
            name: 1,
            description: 1,
            pricePerHour: 1,
            isAvailable: 1,
            cc: 1,
            year: 1,
            model: 1,
            brand: 1,
        })
        .lean()
        .exec();
    return allBikes;
};

const BikeServices = { addNewBike, getAllBikes };

export default BikeServices;
