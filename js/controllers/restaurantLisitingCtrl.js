app.controller('restaurantListingController', function ($scope, $window, $location, Restaurant) {

    $scope.Restaurant = new Restaurant()

    $scope.cuisines = [
        "North Indian",
        "Chinese",
        "Biryani",
        "Arabian",
        "Salads",
        "Desserts",
        "Continental",
        "South Indian",
        "Grill",
        "Seafood",
        "Tandoor",
        "Italian"]

    $scope.filterFlag = false

    $scope.getRestaurantList = function () {
        $scope.Restaurant.getList(function (error, result) {
            if (error) {
                console.log(error)
            }
            else {
                $scope.RestaurantList = result.data
                console.log($scope.RestaurantList)
                $scope.copiedRestaurants = angular.copy($scope.RestaurantList)
            }
        })
    }
    $scope.getRestaurantList()

    $scope.clearFilters = function () {
        delete $scope.type
        delete $scope.cuisine
        delete $scope.avgCost
        $scope.getRestaurantList()

    }

    $scope.filterData = function (type, cuisine, avgCost) {
        var Restaurants = angular.copy($scope.RestaurantList)
        var filteredRestaurantList = []
        if (type == 0)
            type = type.toString()
        if (type) {
            $scope.copiedRestaurants.forEach((element) => {
                if (element.isVeg == type)
                    filteredRestaurantList.push(element)
            });
        }
        if (cuisine) {
            $scope.RestaurantList.forEach((element, parentIndex) => {
                element.cuisines.forEach((element, index, array) => {
                    if (element == cuisine) {
                        var i = filteredRestaurantList.findIndex(function (obj) {
                            return obj.id == Restaurants[parentIndex].id;
                        });
                        if (i == -1) {
                            filteredRestaurantList.push(Restaurants[parentIndex])
                        }
                    }
                })
            });
        }
        if (avgCost) {
            $scope.RestaurantList.forEach((element) => {
                if (element.avgCost <= avgCost) {
                    var i = filteredRestaurantList.findIndex(function (obj) {
                        return obj.id == element.id;
                    });
                    if (i == -1)
                        filteredRestaurantList.push(element)
                }
            });
            console.log(filteredRestaurantList)
        }
        // $scope.RestaurantList = []
        $scope.RestaurantList = filteredRestaurantList
    }

});