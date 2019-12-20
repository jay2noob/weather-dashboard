$(document).ready(function() {
  $("#submitWeather").on("click", function() {
      
      var city = $("#city").val();
      
      if (city != ""){
          $.ajax({

              url: "http://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=2a9470a7d7a866b6c6bc905d5edac7cd&units=imperial",
              type: "GET",
              dataType: "jsonp",
              success: function(data){
                  console.log(data);

                  var widget = show(data);



                  $("#show").html(widget);



                  $("#city").val();

                  show()

                  
                  
              }
          });
      } else {
          $("#error").html("Field cannot be empty");
      }
  });
});

function show(data) {
  return "<h3><strong>Weather</strong>: "+ data.weather[0].main + "</h3>" +
  "<h3><strong>Weather</strong>: "+ data.weather[0].description + "</h3>";
}