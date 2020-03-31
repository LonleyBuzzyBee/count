$(document).ready(function() {
  $("form#form").submit(function(event) {
    event.preventDefault();
    var countTo = $("input#count-to").val();
    var countBy = $("input#count-by").val();
    var displayNumbers= []
      for (var index = countBy; index <= countTo;  index += countBy) {
        displayNumbers.push(index);
        console.log(displayNumbers);
      
      };
  });
});


// $(document).ready(function(){
//   $("form#radio").submit(function(event){
 
//    event.preventDefault();
   
//    var question1 = $("input:radio[name=q1]:checked").val();
//    var question2 = $("input:radio[name=q2]:checked").val();
//    var question3 = $("input:radio[name=q3]:checked").val();
//    var question4 = $("input:radio[name=q4]:checked").val();
//    var question5 = $("input:radio[name=q5]:checked").val();
//    var aResults = 0;
//    var bResults = 0;
//    var cResults = 0;
  
   
 
//    var conclusionsArray = [question1,question2,question3,question4,question5]
//    console.log(conclusionsArray);
//    for (let i = 0; i < 5; i++) {
   
//      if (conclusionsArray[i] === "a") {
//        aResults += 1;
//      }
//      else if (conclusionsArray[i] === "b") {
//        bResults += 1;
//      }
//      else if (conclusionsArray[i] === "c") {
//        cResults += 1;
//      }
//    }
 
//    var preliminaryWinner = "a";
 
//    if (bResults >= aResults) {  
//      preliminaryWinner = "b";
//    }
//    if (cResults >= aResults) {
//      preliminaryWinner = "c"
//    }
//    if (bResults >= cResults && bResults >= aResults) {
//      preliminaryWinner = "b"
//      }
     
  
//      if (preliminaryWinner === "a") {
       
//        $("#a-victor").removeClass("hidden");
//      }
//      else if (preliminaryWinner === "b") {
//        $("#b-victor").removeClass();
//      }
//      else if (preliminaryWinner === "c") {
//        $("#c-victor").removeClass();
//      }
  
//    });
//  });