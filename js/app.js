(function(){
      angular.module("angular", [
          "ui.materialize",
          "ui.router"
      ])
  .config(function($stateProvider, $urlRouterProvider, $locationProvider){
      $urlRouterProvider.otherwise("/");

      $stateProvider
            // .state("/", {
            //     url: "/",
            //     controller: "MainController",
            //     templateUrl: "/templates/main.html"
            // })
            .state("/", {
                url: "/",
                controller: "MainController",
                templateUrl: "/templates/issues.html"

            });
      $locationProvider.html5Mode(true);
  });
})();
