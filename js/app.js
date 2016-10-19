(function(){
      angular.module("notes", [
          "ui.materialize",
          "ui.router"
      ])
  .config(function($stateProvider, $urlRouterProvider){
      $urlRouterProvider.otherwise("/");

      $stateProvider
            .state("/", {
                url: "/",
                controller: "MainController",
                templateUrl: "/templates/home.html"

            });
  });
})();
