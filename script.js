$(document).ready(function() {
  $("#search").on("click", function() {
      
      var city = $("#city").val();
      
      if (city != ""){
          $.ajax({

              url: "http://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=2a9470a7d7a866b6c6bc905d5edac7cd&units=imperial",
              type: "GET",
              dataType: "jsonp",
              success: function(data){
                  console.log(data);

                  var info = show(data);



                  $("#display").html(info);



                  $("#city").val();

                  show()

                  
                  
              }
          });
      } else {
          $("#error").html("Enter info!");
      }
  });
});

function show(data) {
  return "<h4>Current Weather for " + data.name + "," + data.sys.country + "</h4>" +

            "<h5><strong>Weather</strong>: " + data.weather[0].main + "</h5>" +

            "<h5><strong>Temperature</strong>: " + data.main.temp + " F</h5>" +

            "<h5><strong>Pressure</strong>: " + data.main.pressure + "</h5>" +

            "<h5><strong>Humidity</strong>: " + data.main.humidity + "</h5>" +

            "<h5><strong>Min Temperature</strong>: " + data.main.temp_min + " F</h5>" +

            "<h5><strong>Max Temperature</strong>: " + data.main.temp_max + " F</h5>" +

            "<h5><strong>Wind speed</strong>: " + data.wind.speed + " mph</h5>"
}