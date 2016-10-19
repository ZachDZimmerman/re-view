(function() {
    angular.module("notes").factory("AngularIssueSearch", [
        "$http",
        function($http) {
            var AngularIssueSearch = {};
            AngularIssueSearch.getIssues = function(issueSearch) {
                return $http.get("https://api.github.com/repos/angular/angular.js/issues");
            };
            return AngularIssueSearch;
        }
    ]);
})();
