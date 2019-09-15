app.controller('restaurantListingController', function ($scope, Restaurant, CUISINES) {
    $scope.Restaurant = new Restaurant()

    $scope.cuisines = CUISINES.list
    $scope.filterFlag = false

    // get all restaurant lists
    $scope.getRestaurantList = function () {
        $scope.Restaurant.getList(function (error, result) {
            if (error) {
                alert(error)
            }
            else {
                $scope.RestaurantList = result.data
                $scope.copiedRestaurants = angular.copy($scope.RestaurantList)
            }
        })
    }
    $scope.getRestaurantList()

    //reset all filter
    $scope.clearFilters = function () {
        delete $scope.type
        delete $scope.cuisine
        delete $scope.avgCost
        $scope.getRestaurantList()
    }

    // multi attribute filtering of restaurants
    $scope.getFilteredData = function (type, cuisine, avgCost) {
        if (type == 0)
            type = type.toString()

        var dataObj = { type: "", cuisine: "", avgCost: "" }
        dataObj.type = type
        dataObj.cuisine = cuisine
        dataObj.avgCost = avgCost

        $scope.Restaurant.getFilteredList(dataObj, function (error, result) {
            if (error) {
                alert(error)
            }
            $scope.RestaurantList = result
        })
    }
});