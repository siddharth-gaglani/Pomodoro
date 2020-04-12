$(document).ready(function () {

  var buzzer = $("#buzzer")[0]; //for the alarm

  var count = parseInt($("#num").html()); //to get content in breaknum id
  var breakTime = parseInt($("#breakNum").html())


  // for start button

  $("#start").click(function (e) {
    e.preventDefault();
    var counter = setInterval(timer, 1000);

    function timer() {
      // hide variables
      $("#start , #minus5clock, #plus5clock ,#minus5break , #plus5break , #breakNum , #breakTime , #sessionTime").hide();
      count -= 1;
      if (count === 0) {
        buzzer.play();
        clearInterval(counter);
      }
      $("#num").html(count);
    }
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
      console.log(count);
    }
  });
  $("#plus5clock").click(function (e) {
    e.preventDefault();
    // increasing 5 minutes
    count += 5;
    $("#num").html(count);
    console.log(count);
  });


  // for break time same code as above

  $("#minus5break").click(function (e) {
    e.preventDefault();
    if (breakTime > 5) {
      breakTime -= 5;
      $("#breakNum").html(breakTime);
      console.log(breakTime);
    }
  });
  $("#plus5break").click(function (e) {
    e.preventDefault();
    breakTime += 5;
    $("#breakNum").html(breakTime);
    console.log(breakTime);
  });


});