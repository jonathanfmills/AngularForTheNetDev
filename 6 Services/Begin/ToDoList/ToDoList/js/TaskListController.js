(function() {
    var app = angular.module("TaskManager");

    app.controller("taskListController", function ($scope, $http) {



        $scope.newTask = {Completed:false}
        $scope.pageTitle = "Task List";
        $scope.taskList = [];


        $http.get('/api/task').success(function (data, status, headers, config) {
                $scope.taskList = data;
            }).
        error(function (data, status, headers, config) {
            console.log(status);
        });



        $scope.completeTask = function(index)
        {
            
            $http.put('/api/task/' + $scope.taskList[index].Id, $scope.taskList[index]).
                success(function (data, status, headers, config) {
                    $scope.taskList[index] = data;
                }).
            error(function (data, status, headers, config) {
                console.log(status);
            });
        }

        $scope.addTask = function () {
            $http.post('/api/task', $scope.editingTask).
                success(function (data, status, headers, config) {
                    $scope.taskList.push(data);
            }).
            error(function (data, status, headers, config) {
                console.log(status);
            });

            $scope.newtask = { Completed: false }
        }
       
    });

}())