$(document).ready(function () {

  var buzzer = $("#buzzer")[0]; //for the alarm

  var count = parseInt($("#num").html()); //to get content in breaknum id
  var breakTime = parseInt($("#breakNum").html())


  // for start button

  $("#start").click(function (e) {
    e.preventDefault();
    var counter = setInterval(timer, 1000);
    count *= 60;

    function timer() {
      // hide variables
      $("#start , #minus5clock, #plus5clock ,#minus5break , #plus5break , #breakNum , #breakTime").hide();
      $("#timeTypeWork , #timeTimeBreak").show();
      $("#timeTypeWork").html("Session Time:");
      count -= 1;
      if (count === 0) {
        buzzer.play();
        clearInterval(counter);
        var startBreak = setInterval(breakTimer, 1000);
        $("#num").hide();
        breakTime *= 60;
      }
      if (count % 60 >= 10) {
        $("#num").html(Math.floor(count / 60) + ":" + count % 60);
      } else {
        $("#num").html(Math.floor(count / 60) + ":" + "0" + count % 60);
      }
      // $("#num").html(count);

      function breakTimer() {
        $("#timeTypeBreak").html("Break Time:");
        $("#workTime , #timeTypeWork").hide();
        $("#breakNum , #breakTime").show();
        breakTime -= 1;
        if (breakTime === 0) {
          clearInterval(startBreak);
          buzzer.play();
          $("#reset").show();
          $("#breakNum ,#timeTypeBreak,#breakTime,#num").hide();
        }
        if (breakTime % 60 >= 10) {
          $("#breakNum").html(Math.floor(breakTime / 60) + ":" + breakTime % 60);
        } else {
          $("#breakNum").html(Math.floor(breakTime / 60) + ":" + "0" + breakTime % 60);
        }
      }
    }
  });
  $("#reset").click(function (e) {
    e.preventDefault();
    $("#num").show();
    count = 25;
    breakTime = 25;
    $("#num").html(count);
    $("#breakNum").html(breakTime);
    $("#start, #minus5clock, #plus5clock, #minus5break, #plus5break, #workTime, #breakNum, #breakTime").show();
    $("#reset ,#timeTypeBreak").hide();
  });



  $("#reset").hide(); // to hide reset button on page load


  //for work time

  $("#minus5clock").click(function (e) {
    // so that nachor tag doesnt click and point somewhere
    e.preventDefault();
    // decreasing 5minutes
    if (count > 5) {
      count -= 5;
      $("#num").html(count);
      // console.log(count);
    }
  });
  $("#plus5clock").click(function (e) {
    e.preventDefault();
    // increasing 5 minutes
    count += 5;
    $("#num").html(count);
    // console.log(count);
  });


  // for break time same code as above

  $("#minus5break").click(function (e) {
    e.preventDefault();
    if (breakTime > 5) {
      breakTime -= 5;
      $("#breakNum").html(breakTime);
      // console.log(breakTime);
    }
  });
  $("#plus5break").click(function (e) {
    e.preventDefault();
    breakTime += 5;
    $("#breakNum").html(breakTime);
    // console.log(breakTime);
  });


});