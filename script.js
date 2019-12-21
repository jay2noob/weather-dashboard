$(document).ready(function() {
  $("#search").on("click", function() {
      
      var city = $(".city").val();
      
      if (city != ""){
          $.ajax({

              url: "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=2a9470a7d7a866b6c6bc905d5edac7cd&units=imperial",
              type: "GET",
              dataType: "json",
              success: function(data){

                  var info = show(data);

                  $("#display").html(info);

                  $(".city").val();

                  show()
                  
              }
          });
      }
  });
});

function show(data) {
  return "<h4>" + data.name + "," + data.sys.country + "</h4>" +

            "<h5><strong>Weather</strong>: " + data.weather[0].main + "</h5>" +

            "<h5><strong>Temperature</strong>: " + data.main.temp + " &deg;F</h5>" +

            "<h5><strong>Humidity</strong>: " + data.main.humidity + "%</h5>" +

            "<h5><strong>Wind speed</strong>: " + data.wind.speed + " mph</h5>" +
            
            "<h5><strong>Symbol</strong>: " + data.weather[0].icon + " </h5>";
}



