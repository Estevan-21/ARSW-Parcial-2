var WeatherRestControllerModule = (function () {

  var getWeather = function (callback,city) {
    axios.get('/weather/'+city)
            .then(function(info){
                callback.onSuccess(info.data);
                console.log(info);
            })
            .catch(function(error){
                            //callback.onFailed(error);
                            console.log(error);
                        });
  };



  return {
    getWeather: getWeather
  };



})();