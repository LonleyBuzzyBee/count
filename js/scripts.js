$(document).ready(function() {
  $("form#form").submit(function(event) {
    event.preventDefault();
    var countTo = parseInt($("#count-to").val());
    var countBy = parseInt($("#count-by").val());
    var displayNumbers= []

      for (var index = countBy; index <= countTo;  index += countBy) {
        // alert(index);
        displayNumbers.push(index);
        $("#output").text(displayNumbers);
      };
  });
});