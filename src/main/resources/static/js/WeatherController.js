/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var WeatherControllerModule = (function () {
    var getWeather = function(){
         
        var city =document.getElementById('ciudad').value;
        console.log(city);

        var callback = {
            
            onSuccess: function(response){
                    console.log("BIEN");
                    var datos=JSON.stringify(response);
                    console.log(datos);
                    var texto='<p class="lead" id="data"></p>'+datos;
                    var data = document.getElementById('data');
                    data.innerHTML=texto;


            },
            onFailed: function(exception){
                console.log(exception);
                alert("There is a problem with our servers. We apologize for the inconvince, please try again later");  
            }
         };
        WeatherRestControllerModule.getWeather(callback,city);

    };
   
  

  return {
    getWeather: getWeather
  };
})();

