(function(){
      angular.module("notes", [
          "ui.materialize",
          "ui.router"
      ])
  .config(function($stateProvider, $urlRouterProvider){
      $urlRouterProvider.otherwise("/");

      $stateProvider
            .state("main", {
                url: "/",
                controller: "MainController",
                templateUrl: "/templates/main.html"

            });
  });
})();
