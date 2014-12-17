(function () {

    
    var taskService = function($http) {
        var getTaskList = function() {
            return $http.get('/api/task').success(function (data, status, headers, conf) {
                return data;
            }).error(function (data, status, headers, conf) {
                return status;
            });

        }

        var updateTask = function(id, task)
        {
            return $http.put('/api/task/' + id, task).
                success(function (data, status, headers, config) {
                    return data;
                }).
            error(function (data, status, headers, config) {
                return status;
            });
        }

        return {
            getTaskList: getTaskList,
            updateTask: updateTask
        };


    }


    var app = angular.module("TaskManager");
    app.factory('taskService', taskService);
}())