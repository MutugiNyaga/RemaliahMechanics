$(document).ready(function(){
    $(".more3").click(function(){
      $(".description3").toggle();
    });
  });
  
    $(document).ready(function(){
      $("menu").click(function(){
        $(".nav").toggle();
      });
    });

    $(document).ready(function(){
      $("#send_2").click(function(event){
        var name = $("input#name_2").val();
        var email = $("input#email_2").val();
        var phone = $("input#phone_2").val();
        var message = $("textarea#message_2").val();
        if ($("input#name_2").val() && $("input#email_2").val()){
          alert (name + ", we have received your message. Thank you for reaching out to us.");
        }
        else {
          alert("Please enter your name,phone and email!");
        }
        $("input#name_2").val("");
        $("input#email_2").val("");
        $("input#phone_2").val("");
        $("textarea#message_2").val("");
      });
    
    });

    function order() {
      var name= document.getElementById("name").value;
      var email= document.getElementById("email").value;
      var service= document.getElementById("service").value;
      var date= document.getElementById("date").value;
      var time= document.getElementById("time").value; 
      if (name==="" || email==="" || date==="" || time==="") {
        alert("Please fill in the necessary information before proceeding!")
      } else {
      // alert( name + "!" + " You have successfully booked an appointment with Remaliah Mechanics. We are glad that you chose us and we promise to provide the best service possible. Thank you!")
      $(".book").click(function() {
        $("#summary").fadeIn();
        $("#bookform").hide();
      });
      }
      document.getElementById("x").innerHTML= "You have booked a " + service + " appointment."
      document.getElementById("y").innerHTML= "We will be glad to offer you the selected service on " + date
      document.getElementById("z").innerHTML= "Your appointment will be at exactly " + time 
      document.getElementById("ad").innerHTML= "Please ensure that you arrive on the scheduled time of service."
    }
    
    $(document).ready(function() {
      $("#okaybutton").click(function(){
        $("#summary").fadeOut();
        $("#bookform").show();
      });
    })