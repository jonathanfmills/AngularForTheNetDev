(function() {
    var app = angular.module("TaskManager");

    app.controller("TaskListController", function ($scope) {

        $scope.editingTask = {active:true}
        $scope.pageTitle = "Task List";
        $scope.taskList = [
        {
            name: "Task1",
            completed: false
        },
        {
            name: "Task2",
            completed: true
        }];

        $scope.addTask = function () {
            
            $scope.taskList.push($scope.editingTask);
            $scope.editingTask = { completed: false }
        }

        $scope.editTask = function(index) {
            $scope.editingTask = $scope.taskList[index];
        }

        $scope.taskClass = function ($index) {
            if ($scope.taskList[index].completed) {
                alert("hi");
                return "text-uppercase";
            }
            
        }
    });

}())