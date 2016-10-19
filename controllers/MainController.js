(function() {
    angular.module("angular").controller("MainController", MainController);

    MainController.$inject = ["$scope",  "$http"];

    function MainController($scope, $http) {

        $scope.loadIssue = false;
        $scope.loadUser = false;

        $http.get("https://api.github.com/users/angular")
        .success(function(data) {
            $scope.userData = data;
            getAngularIssues();
        }).error(function() {
            $scope.loadUser = true;
        });

        var getAngularIssues = function() {
            $http.get("https://api.github.com/repos/angular/angular.js/issues")
            .success(function(data) {
                $scope.issueData = data;
            }).error(function() {
                $scope.loadIssue = true;
            });
        };
        $scope.update = "updated_at";
        $scope.created = "created_at";
    }
})();
