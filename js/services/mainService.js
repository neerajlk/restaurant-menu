// ===================================== HttpService SERVICES =====================================
var API_URL = '';

app.factory('MainService', function ($http,CONFIG) {

    var MainService = function () {}

    API_URL = CONFIG.URL

    MainService.prototype.get = function (path, auth, callback) {

        $http({
            method: "GET",
            url: API_URL + path,
            headers: {'Content-Type': 'application/json',},
            data: ''
        })
            .then(function (response) {
                var result = response.data;
                callback(false, result);
            },
                function (error) {
                    if (error.data == null) {
                        sweetAlert({
                            title: "Oooops!",
                            text: "Something went wrong try again",
                            type: "error"
                        }, function () {
                            location.reload();
                        });
                    } else {
                        var errorData = error.data.error;
                        var message = errorData;
                        var errorMessages = [];

                        for (let i = 0; i < message.length; i++) {
                            errorMessages.push(message[i].message);
                        }

                        callback(errorMessages, false);
                    }
                });
    };



    MainService.prototype.post = function (path, auth, dataObj, callback) {

        $http({
            method: "POST",
            url: API_URL + path,
            headers: configHeader(auth),
            data: dataObj
        })
            .then(function (response) {
                var result = response.data;
                callback(false, result);

            },
                function (error) {
                    if (error.data == null) {
                        sweetAlert({
                            title: "Oooops!",
                            text: "Something went wrong try again",
                            type: "error"
                        }, function () {
                            location.reload();
                        });
                    } else {
                        var errorData = error.data.error;
                        var message = errorData;
                        var errorMessages = [];

                        for (let i = 0; i < message.length; i++) {
                            errorMessages.push(message[i].message);
                        }

                        callback(errorMessages, false);
                    }
                });
    };


    MainService.prototype.delete = function (path, auth, dataObj, callback) {
        $http({
            method: "DELETE",
            url: API_URL + path,
            headers: configHeader(auth),
            data: dataObj
        })
            .then(function (response) {
                var result = response.data;
                callback(false, result);
                swal.close();
            },
                function (error) {
                    if (error.data == null) {
                        sweetAlert({
                            title: "Oooops!",
                            text: "Something went wrong try again",
                            type: "error"
                        }, function () {
                            location.reload();
                        });
                    } else {

                        var errorData = error.data.error;
                        var message = errorData;
                        var errorMessages = [];

                        for (let i = 0; i < message.length; i++) {
                            errorMessages.push(message[i].message);
                        }

                        callback(errorMessages, false);
                    }
                });
    };


    MainService.prototype.update = function (path, auth, dataObj, callback) {
        $http({
            method: "PUT",
            url: API_URL + path,
            headers: configHeader(auth),
            data: dataObj
        })
            .then(function (response) {
                var result = response.data;
                callback(false, result);
            },
                function (error) {
                    if (error.data == null) {
                        sweetAlert({
                            title: "Oooops!",
                            text: "Something went wrong try again",
                            type: "error"
                        }, function () {
                            location.reload();
                        });
                    } else {
                        var errorData = error.data.error;
                        var message = errorData;
                        var errorMessages = [];

                        for (let i = 0; i < message.length; i++) {
                            errorMessages.push(message[i].message);
                        }

                        callback(errorMessages, false);
                    }
                });
    };
   

    // Success function to handle response
    function responseCallback (response, callback) {
        var result = response.data;
        callback(false, result);
    }


    // Error function to handle error condition 
    function errorCallback (error, callback) {
        if (error.data == null) {
            sweetAlert({
                title: "Oooops!",
                text: "Something went wrong try again",
                type: "error"
            }, function () {
                location.reload();
            });
            return;
        } 
        var errorData = error.data.error;
        var message = errorData;
        var errorMessages = [];

        for (let i = 0; i < message.length; i++) 
            errorMessages.push(message[i].message);

        callback(errorMessages, false);
    }

    return new MainService();
});