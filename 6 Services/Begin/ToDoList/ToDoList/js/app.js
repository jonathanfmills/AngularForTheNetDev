(function() {

    var app = angular.module("TaskManager", ['ngRoute']);

    app.config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/', {
            templateUrl: 'Partials/TaskList.html',
            controller: 'taskListController'
        }).when('/new', {
            templateUrl: 'Partials/TaskAdd.html',
            controller: 'taskAddController'
        }).when('/task/:taskId', {
            templateUrl: 'Partials/TaskAdd.html',
            controller: 'taskEditController'
        });
    }]);
}())