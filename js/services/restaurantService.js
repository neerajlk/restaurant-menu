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

    Restaurant.prototype.getFilteredList = function (DataObj, callback) {
        var path = restaurantPath;
        MainService.get(path, true, function (error, result) {
            if (error) {
                return;
            }

            type = DataObj.type
            cuisine = DataObj.cuisine
            avgCost = DataObj.avgCost

            var filteredData = result.data.filter(function (el) {
                if (type && cuisine && avgCost) {
                    return el.isVeg == type && el.cuisines.includes(cuisine) && el.avgCost <= avgCost;
                }
                else if (type && cuisine) {
                    return el.isVeg == type && el.cuisines.includes(cuisine);

                }
                else if (type && avgCost) {
                    return el.isVeg == type && el.avgCost <= avgCost;

                }
                else if (cuisine && avgCost) {
                    return el.cuisines.includes(cuisine) && el.avgCost <= avgCost;

                }
                else if (type) {
                    return el.isVeg == type

                }
                else if (cuisine) {
                    return el.cuisines.includes(cuisine)

                }
                else if (avgCost) {
                    return el.avgCost <= avgCost;

                }
                else {
                    return true;

                }
            })

            callback(false, filteredData);
        });
    };

    return Restaurant;
});