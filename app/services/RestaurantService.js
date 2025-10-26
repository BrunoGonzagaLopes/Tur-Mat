import restaurantsData from '../entities/restaurants.json';

const RestaurantService = {
  getAll: async () => {
  
    return new Promise((resolve) => {
        resolve(restaurantsData);
    });
  },
};

export default RestaurantService;