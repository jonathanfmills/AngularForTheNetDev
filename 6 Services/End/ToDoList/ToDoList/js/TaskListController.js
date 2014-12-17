(function() {
    var app = angular.module("TaskManager");

    app.controller("taskListController", function ($scope, $http, taskService) {

        $scope.newTask = {Completed:false}
        $scope.pageTitle = "Task List";
        $scope.taskList = [];

        var onError = function(status) {
            console.log(status);
        }

        var onTaskReturn = function(data) {
            $scope.taskList = data;
        }

        taskService.getTaskList().success(onTaskReturn).error(onError);
        



        $scope.completeTask = function(index) {

            taskService.updateTask($scope.taskList[index].Id, $scope.taskList[index]).
            success(function(data) {
                $scope.taskList[index] = data;
            }).error(function (status) {
                console.log(status);
            });


            
        }

       
    });

}())