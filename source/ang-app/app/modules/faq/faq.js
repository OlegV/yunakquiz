(function(){ 
  var  app = angular.module('yunakQuiz.faqPage' ,['ngRoute', 'yunakQuiz.faqTab']);

  app.config(['$routeProvider',
    function($routeProvider) {
      $routeProvider.
        when('/faq', {
          templateUrl: './modules/faq/faq.html',
          controller: 'faqCtrl'
        })
    }
  ]);

  app.controller('faqCtrl', ['$scope', '$http', 'QuestionService', function ($scope, $http, QuestionService) {

    QuestionService.get().success(function(data){
      $scope.Questions = data;

      for (var i = $scope.Questions.length - 1; i >= 0; i--) {
        $scope.Questions[i].visible = false;
      };
    });

    $scope.showIcon = function(index){
      if(!$scope.Questions[index].visible)
        return "glyphicon glyphicon-chevron-down" 
      else 
        return "glyphicon glyphicon-chevron-up"
    };

    $scope.showAnswer = function(index){
      $scope.Questions[index].visible = !$scope.Questions[index].visible;
      $scope.showIcon(index);
      $("p").each(function(){
        $(this).fadeIn("slow");
      });
    };
          
  }])
})();