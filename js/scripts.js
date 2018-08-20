// business logic
function ToDo(task) {
  this.task = task;
}

// user interface
$(document).ready(function() {
  $("#task-form").submit(function(event){
    event.preventDefault();
    var userInput = $("#new-task").val();
    var newToDo = new ToDo(userInput);

    $("#todo-list").append("<li class='task'>" + newToDo.task + "</li>");
    $("input#new-task").val("");

    $(".task").last().click(function() {
      $("#done-list").append("<li class='task'>" + newToDo.task + "</li>");
      $(this).hide(newToDo.task);

       //what is this for?? we tested and it seemed it din't do anything.
    });

  });

});
