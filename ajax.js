$(document).ready(function () {

  $("#step12").click(function (){

    $.ajax({
      url: 'http://first-ajax-api.herokuapp.com/',
      method:'GET'

    }).done(function(data){
      console.log(data);
      $('body').append(data);
    }).fail(function(jqXHR, textStatus, errorThrown){
      console.log('Ajax Request Failed');
      console.log(jqXHR);
    }).always(function(){
      console.log('Ajax Request Sent');
    });

  });


  $("#step3456").click(function (){

    $.ajax({
      url: 'http://first-ajax-api.herokuapp.com/ping',
      method:'GET'

    }).done(function(data){
      console.log(data);
      $("#step3456").append(data);
    }).fail(function(jqXHR, textStatus, errorThrown){
      console.log('Ajax Request Failed');
      console.log(jqXHR);
    }).always(function(){
      console.log('Hey the request finished!');
    });

  });

  $("#step3456").click(function (){

    $.ajax({
      url: 'http://first-ajax-api.herokuapp.com/pong',
      method:'GET'

    }).done(function(data){
      console.log(data);
      $("#step3456").append(data);
    }).fail(function(jqXHR, textStatus, errorThrown){
      console.log('Ajax Request Failed');
      console.log('jqXHR: ' + jqXHR);
      console.log('textStatus: ' + textStatus);
      console.log('errorThrown: ' + errorThrown);
      $("#step3456").append(jqXHR.statusText);
      $("#step3456").append(jqXHR.responseText);
    }).always(function(){
      console.log('Hey the request finished!');
    });

  });

  $("#step7").click(function (){

    $.ajax({
      url: 'http://first-ajax-api.herokuapp.com/count',
      method:'GET',
      data: {
        amount: 5
      },
    }).done(function(data){
      console.log(data);
      $("#step7").append(data + '<br>');
    }).fail(function(jqXHR, textStatus, errorThrown){
      console.log('Ajax Request Failed');
      console.log(jqXHR);
    }).always(function(){
      console.log('Hey the request finished!');
    });

  });


  $("#step8").click(function (){

    $.ajax({
      url: 'http://first-ajax-api.herokuapp.com/time',
      method:'GET',
      data: {
        timezone: $('input.timezone').val()//'America/Mexico_City' //Europe/Sofia //Pacific/Honolulu',// 'Asia/Kolkata'
      },

    }).done(function(data){
      console.log(data);
      $("form").append("<br>" + data);
    }).fail(function(jqXHR, textStatus, errorThrown){
      console.log('Ajax Request Failed');
      console.log(jqXHR);
      $("form").append(jqXHR.statusText);
      $("form").append(jqXHR.responseText);
    }).always(function(){
      console.log('Hey the request finished!');
    });

  });

  $("#step9").click(function (){

    $.ajax({
      url: 'http://first-ajax-api.herokuapp.com//a_car',
      method:'GET',
      dataType: 'html',

    }).done(function(data){
      console.log(data);
      $("#step9").append("<ul>" + data + "</ul>");
    }).fail(function(jqXHR, textStatus, errorThrown){
      console.log('Ajax Request Failed');
      console.log(jqXHR);
    }).always(function(){
      console.log('Hey the request finished!');
    });

  });


  // POST AJAX Request
  $("#add-monsters").click(function (){
    // AJAX request
    $.ajax({
      crossDomain: false, // Same-origin policy, needed for dataType bc the monster api is not the same origin
      //http://monsters-api.herokuapp.com/monsters/scare
      url: 'http://monsters-api.herokuapp.com/monsters',
      data: {
        monster: {
          name: 'Theresa',
          home: 'Taiwan',
          creepiness:30
        }
      },
      method:'POST'
      //.done() .fail()  .always()
    }).done(function(data){
      $('body').append("Susccess: monsters created");
    }).fail(function(jqXHR, textStatus, errorThrown){
      $('body').append("Error: could not create a monster");
    }).always(function(){
      $('body').append('Add operation complete');
    });

  });

});
