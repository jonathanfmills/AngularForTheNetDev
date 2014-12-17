(function () {
    var app = angular.module("TaskManager");

    app.controller("taskEditController", function ($scope, $http, $location, $routeParams) {


        var taskId = $routeParams.taskId;

        $scope.newTask = { Completed: false }
        $scope.pageTitle = "Edit Task";
        $http.get('/api/task/' + taskId).success(function (data, status, headers, config) {
            $scope.newTask = data;
        }).
        error(function (data, status, headers, config) {
            console.log(status);
        });



        $scope.addTask = function (index) {

            $http.put('/api/task/' + $scope.newTask.Id, $scope.newTask).
                success(function (data, status, headers, config) {
                    $location.path('/');
                }).
            error(function (data, status, headers, config) {
                console.log(status);
            });
        }
    });

}())