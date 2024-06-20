import IBike from './bike.interface';
import Bike from './bike.model';

const addNewBike = async (bikeData: IBike) => {
    const result = await Bike.create(bikeData);
    return result.toObject();
};

const BikeServices = { addNewBike };

export default BikeServices;
