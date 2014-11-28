'use strict';
/** Quiz Edit controller  */
angular.module('yunakQuiz.assessments')
.controller('QuizReviewCtrl', 
  ['$scope','QuizResource', 'CommentsResource', '$routeParams',
   '$route','$location','QuizMngService', 'getAccess','CONFIG', 
  function($scope, QuizResource, CommentsResource, $routeParams,
   $route, $location, QuizMngService, getAccess,CONFIG) {

  /** get Quiz by ID */
  if (getAccess('/admin/assessments/review','moder')) {
    init();
  } else {
    $location.path( "/404" );
  };

  $scope.dateFormat = CONFIG.DATE_FORMAT;

  function init(){
    $scope.quiz = QuizResource.get({id:$routeParams.quiz_id}, quizSuccess, quizError);
    console.log($scope.quiz);
  };

  function quizSuccess(quiz) {
    $scope.comments = CommentsResource.get({id: quiz.id});
  };
  
  function quizError(response) { 
    $scope.errorMsg = response.data || 'Тест не отримано'
  };

  $scope.addComment=function(){
    $scope.comments.arr.push({'text':$scope.newComments});
    $scope.newComments='';
  };

  $scope.deleteComment=function(index){
    $scope.comments.arr.splice(index,1);
  };

  /** save draft Quiz */
  $scope.enhanceQuiz=function(){
    sendQuiz("enhance");
  };

  /** save Quiz for review */
  $scope.publishQuiz=function(){
    sendQuiz("published");
  };

  /** send Quiz to backend  */
  function sendQuiz(state){
    $scope.quiz.status = state;
    if(!QuizMngService.validateQuiz($scope.quiz)){
      $scope.quiz.$update(sendQuizSuccess, sendQuizError);
    };
  };

  function sendQuizSuccess(value){
    sendComments(value.status);
  };

  function sendQuizError(response){
    window.scrollTo(0,0);
    $scope.errorMsg = 'Ваш тест не збережено';
  }

  function sendComments(state){
    state === "published"?
      $scope.comments.$delete(sendCommentsSuccess, sendCommentsError):
      $scope.comments.$save(sendCommentsSuccess, sendCommentsError);
  };

  function sendCommentsSuccess(){
    $location.path('/admin/moderationCabinet/'+$scope.quiz.status);
  };

  function sendCommentsError(){
    window.scrollTo(0,0);
    $scope.errorMsg = 'Коментарі не збережено';
  };
 
}]);
