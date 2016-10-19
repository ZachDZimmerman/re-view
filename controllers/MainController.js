(function() {
    angular.module("notes").controller("MainController", MainController);

    MainController.$inject = ["$scope", "$q", "$http"];

    function MainController($scope, $q, $http) {

        $scope.issueUpload = false;
        $scope.userUpload = false;

        $http.get("https://api.github.com/users/angular")
          .success(function (data) {
              $scope.userData = data;
              getAngularIssues();
          })
          .error(function () {
              $scope.userUpload = true;
          });

        var getAngularIssues = function () {
            $http.get("https://api.github.com/repos/angular/angular.js/issues")
            .success(function (data) {
                $scope.issueData = data;
            })
            .error(function() {
                $scope.issueUpload = true;
            });
        };

        $scope.order = '-updated_at';
    }
})();
