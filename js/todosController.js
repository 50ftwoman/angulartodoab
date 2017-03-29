(function() {
  angular.module('todosApp')
         .controller('TodosController', TodosController)

function TodosController($scope, $log)  {
  $scope.add      = addTodo
  $scope.newTodo  = {
    task: "",
    done: false
  }

  $scope.all = [
    {task: "Do this fucking shit", done: false},
    {task: "Buy a freaking dress", done: false}
  ]

  $log.log($scope.all)

  function addTodo() {
    $scope.all.push({
      task: $scope.newTodo.task,
      done: false
    })
    $scope.newTodo = {
      task: "",
    }
  }

  $scope.todoRemove = function(index) {
    $scope.all.splice(index, 1)
  }

}

}())
