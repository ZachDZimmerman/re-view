(function() {
    angular.module("notes").controller("MainController", MainController);

    MainController.$inject = ["$scope", "$q", "$http"];

    function MainController($scope, $q, $http) {

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
            $http.get("https://api.github.com/search/issues?q=repo:angular/angular&per_page=100")
            .success(function(data) {
                $scope.issueData = data;
            }).error(function() {
                $scope.loadIssue = true;
            });
        };
        $scope.order = "-updated_at";
    }
})();
