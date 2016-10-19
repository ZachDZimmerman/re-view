(function() {
    angular.module("notes").controller("MainController", MainController);

    MainController.$inject = ["$scope", "$q", "$http"];

    function MainController($scope, $q, $http) {

        $scope.issueUp = false;
        $scope.userUp = false;

        $http.get("https://api.github.com/users/angular")
          .success(function (data) {
              $scope.user = data;
              getAngularIssues();
          })
          .error(function () {
              $scope.userUp = true;
          });

        var getAngularIssues = function () {
            $http.get("https://api.github.com/repos/angular/angular.js/issues")
            .success(function (data) {
                $scope.issueData = data;
            })
            .error(function() {
                $scope.issueLoaded = true;
            });
        };

console.log(getAngularIssues);

// q={query}{&page,per_page,sort,order}

        // // HTTP Requests
        // $q.all(url).then(function(data) {
        //     data = data[0].data.items.concat(data[1].data.items);
        //     $scope.data = data;
        //
        //     console.log(data);
        // });
    }
    // $scope.update = "-updated_at";
})();
