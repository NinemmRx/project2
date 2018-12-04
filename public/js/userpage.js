$(document).ready(function() {
  $( window ).on( "load", function() {
   // $("input:hidden#recipes").val("pizza");
   //$("#recipes").val("");
    //console.log("#cuisine");
  movies();
  })
  function movies()
  {
 
  var settings = {
    "async": true,
    "crossDomain": true,
    "url": "https://api-gate2.movieglu.com/filmsNowShowing/?n=20",
    "method": "GET",
    "headers": {
      "api-version": "v200",
      "Authorization": "Basic VUNTRF8wOkN0Qkh3b3I4SUJHVg==",
      "client": "UCSD_0",
      "x-api-key": "IGd7Mq5SKX50rzyJ2B5Ea1JKAQBS9hNk2SMsGF7l",
      "device-datetime": "2018-12-03T04:16:37.406Z",
      "territory": "CA",
      "Geolocation": "Use semicolon to separate LAT;LON",
      "user_id": "{{user_id}}",
      "app_version": "Version of your app, eg 1.0.5 (Optional)",
      "app_platform": "Platform of your app, eg iOS (Optional)",
      "language": "{{language}}",
      "cache-control": "no-cache",
      // "Postman-Token": "48612396-0f99-4f1a-86ef-e72d9819a20c"
    }
  }
  
  $.ajax(settings).done(function (response) {
    console.log(response);
    var result = response.films;
    console.log(result[0].film_name);
    //var image = $("<img>").attr("src", result[0].image_url);
        // $("#image").append(image);
        for (var i = 0; i< result.length; i++)
          {

         
            var video = $("<video>").attr({src:result[i].film_trailer, id: "pic", controls: true });
            var title = $("<title>").attr(result[i].film_name);
          console.log(result[i].film_name)
           
          $("#search-content").append(video);
          $("#search-name").append(title);
          }
      
    })
  }
 function comingsoon()
 {
  var settings = {
    "async": true,
    "crossDomain": true,
    "url": "https://api-gate2.movieglu.com/filmsNowShowing/?n=20",
    "method": "GET",
    "headers": {
      "api-version": "v200",
      "Authorization": "Basic VUNTRF8wOkN0Qkh3b3I4SUJHVg==",
      "client": "UCSD_0",
      "x-api-key": "IGd7Mq5SKX50rzyJ2B5Ea1JKAQBS9hNk2SMsGF7l",
      "device-datetime": "2018-12-03T04:16:37.406Z",
      "territory": "CA",
      "Geolocation": "Use semicolon to separate LAT;LON",
      "user_id": "{{user_id}}",
      "app_version": "Version of your app, eg 1.0.5 (Optional)",
      "app_platform": "Platform of your app, eg iOS (Optional)",
      "language": "{{language}}",
      "cache-control": "no-cache",
      // "Postman-Token": "48612396-0f99-4f1a-86ef-e72d9819a20c"
    }
  }
  
  $.ajax(settings).done(function (response) {
    console.log(response);
    var result = response.films;
    console.log(result[0].film_name);
    //var image = $("<img>").attr("src", result[0].image_url);
        // $("#image").append(image);
        for (var i = 0; i< result.length; i++)
          {

         
            var video = $("<video>").attr({src:result[i].film_trailer, id: "pic", controls: true });
          $("#search-content").append(video);
          }
      
    })
  }
  function nearby()
  {
   var settings = {
    "async": true,
    "crossDomain": true,
    "url": "https://api-gate2.movieglu.com/filmsNowShowing/?n=20",
    "method": "GET",
    "headers": {
      "api-version": "v200",
      "Authorization": "Basic VUNTRF8wOkN0Qkh3b3I4SUJHVg==",
      "client": "UCSD_0",
      "x-api-key": "IGd7Mq5SKX50rzyJ2B5Ea1JKAQBS9hNk2SMsGF7l",
      "device-datetime": "2018-12-03T04:16:37.406Z",
      "territory": "CA",
      "Geolocation": "Use semicolon to separate LAT;LON",
      "user_id": "{{user_id}}",
      "app_version": "Version of your app, eg 1.0.5 (Optional)",
      "app_platform": "Platform of your app, eg iOS (Optional)",
      "language": "{{language}}",
      "cache-control": "no-cache",
      // "Postman-Token": "48612396-0f99-4f1a-86ef-e72d9819a20c"
     }
   }
   
   $.ajax(settings).done(function (response) {
     console.log(response);
     var result = response.films;
     console.log(result[0].film_name);
     //var image = $("<img>").attr("src", result[0].image_url);
         // $("#image").append(image);
         for (var i = 0; i< result.length; i++)
           {
 
          
             var video = $("<video>").attr({src:result[i].film_trailer, id: "pic", controls: true });
           $("#search-content").append(video);
           }
       
     })
   }
   $("#comingsoon").on("click", function(event) {
    event.preventDefault();
    comingsoon();   
  
  });
  $("#nearby").on("click", function(event) {
    event.preventDefault();
    nearby();
  
  });



  });
       
