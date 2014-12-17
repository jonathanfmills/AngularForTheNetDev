(function () {
    var app = angular.module("TaskManager");

    app.controller("taskAddController", function ($scope, $http, $location) {



        $scope.newTask = { Completed: false }
        $scope.pageTitle = "New Task";

        $scope.addTask = function () {
            $http.post('/api/task', $scope.newTask).
                success(function (data, status, headers, config) {
                    $location.path('/');
                }).
            error(function (data, status, headers, config) {
                console.log(status);
            });

            $scope.newtask = { Completed: false }
        }

    });

}())