app.factory('Restaurant', function ($http, MainService) {
    var Restaurant = function () { };
    var restaurantPath = '/restaurants.json';

    Restaurant.prototype.getList = function (callback) {
        var path = restaurantPath;
        MainService.get(path, true, function (error, result) {
            if (error) {
                return;
            }
            callback(false, result);
        });
    };

    Restaurant.prototype.getMenuById = function (restaurantId, callback) {
        var path = restaurantPath;
        MainService.get(path, true, function (error, result) {
            if (error) {
                return;
            }
            else {
                if (result.data.length > 0) {
                    restaurant = result.data.find(x => x.id === restaurantId);
                    callback(false, restaurant);
                }
            }
        });
    };

    return Restaurant;
});