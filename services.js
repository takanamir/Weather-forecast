// service
weatherApp.service('cityService', function () {

    this.city = 'Osaka';

});

weatherApp.service('weatherService', ['$resource', function ($resource) {

    this.getWeather = function (city, days) {

        var weatherAPI = $resource("http://api.openweathermap.org/data/2.5/forecast", {
            callback: 'JSON_CALLBACK'
        }, {
            get: {
                method: 'JSONP'
            }
        });

        return weatherAPI.get({
            q: city,
            cnt: days * 8,
            appid: 'd2e4f7739399b1477f76a5739206bc84'
        });

    };
}]);