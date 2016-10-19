(function(){
      angular.module("notes", [
          "ui.materialize",
          "ui.router"
      ])
  .config(function($stateProvider, $urlRouterProvider, $locationProvider){
      $urlRouterProvider.otherwise("/");

      $stateProvider
            .state("/", {
                url: "/",
                controller: "MainController",
                templateUrl: "/templates/main.html"
            })
            .state("issues", {
                url: "/",
                controller: "MainController",
                templateUrl: "/templates/issues.html"

            });
      $locationProvider.html5Mode(true);
  });
})();
