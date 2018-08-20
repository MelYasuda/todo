// user interface
$(document).ready(function() {
  $("#task-form").submit(function(event){
    event.preventDefault();

    function ToDo(task) {
      this.task = task;
    }

    var userInput = $("#new-task").val();
    var newToDo = new ToDo(userInput);

    $("#todo-list").append("<li class='task'>" + newToDo.task + "</li>");

    $(".task").last().click(function() {
      $("#done-list").append("<li class='task'>" + newToDo.task + "</li>");
      $(this).hide(newToDo.task);
    });

  });









});
