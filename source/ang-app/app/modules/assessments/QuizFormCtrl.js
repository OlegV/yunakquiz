angular.module('yunakQuiz.assessments')
.directive('quizForm', [ function() {
  return {
    restrict: 'EA',
    scope: {quiz: '=', quizFormName: '='},
    controller: 'quizFormCtrl',
    templateUrl: './modules/assessments/QuizFormTpl.html',
    replace: true
  }
}])
.controller('quizFormCtrl', 
  ['$scope', 'QuizDataService', 'TagsService', 'CategoriesService', 'QuizResourceService',
  function($scope, QuizDataService, TagsService, CategoriesService, QuizResourceService ){
  
  getCat();

  $scope.loadTags = function (query) {
      return TagsService.getTags(query)
  };

  function getCat(){
    CategoriesService.getCat().success(function(data, status, headers, config) {
          $scope.categories=data;  
          $scope.$watch('quiz.id', function(newVal) {
           if (newVal) { selectCat() }
          });
    });
  };

  $scope.clearSubcat = function(){
    $scope.selectedSubcat='';
  };

  $scope.setSubcat = function(){
    $scope.quiz.category_id = $scope.selectedSubcat.id;
  };

  function selectCat(){
    // alert("set cat")
    for (var i=0; i < $scope.categories.length; i++){   
      if (selectSubcat($scope.categories[i].categories)){
        $scope.selectedCat = $scope.categories[i];
      }
    };
  }

  function selectSubcat(subCatsArray){
    for (var i=0; i < subCatsArray.length; i++){    
      if (subCatsArray[i].id == $scope.quiz.category_id){
        $scope.selectedSubcat = subCatsArray[i];
        return true;
      };
    };
  };

  $scope.validateTitle = function(){
    QuizResourceService.validateTitle($scope.quiz.title, $scope.quiz.id)
      .success(function(data) { 
        $scope.titleError =  data 
      })
  };
  
  $scope.filterFunction = function(element) {
    return element.toDelete ? false : true
  };

  $scope.addAnswer = function(question) {
    question.answers.push(new QuizDataService.Answer());
  };

  $scope.deleteAnswer = function(answer, question) {
    if (answer.id){
      answer.toDelete = true;
    }
    else {  
      var index = question.answers.indexOf(answer);
      question.answers.splice(index, 1);
    }  
  }

  $scope.setCorrectAnswer=function(question,answer){
    question.invalid = false;
    answer.correct = !answer.correct;
  };

  $scope.addQuestion = function(){
    $scope.quiz.questions.push(new QuizDataService.Question())    
  };
    
  $scope.deleteQuestion = function(question){
    if(question.id){
      question.toDelete = true;
    }
    else{
      var index = $scope.quiz.questions.indexOf(question);
      $scope.quiz.questions.splice(index, 1);
    }
  };

  
  
}]);