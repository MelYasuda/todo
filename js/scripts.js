// user interface
$(document).ready(function() {
  $("#task-form").submit(function(event){
    event.preventDefault();
    var userInput = $("#new-task").val();
    $("#todo-list").append("<li>" + userInput + "</li>");
  });
});
