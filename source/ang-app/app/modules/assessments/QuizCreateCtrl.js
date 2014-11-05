'use strict';
/** Quiz Create controller  */
yunakQuizApp.controller('QuizCreateCtrl', ['$scope','QuizData','tags', '$location', function($scope, QuizData,tags, $location) {

	 $scope.loadTags = function(query) {
	    return tags.load();
	};

	$scope.getCat = function(){
		QuizData.getCat().success(function(data, status, headers, config) {
        	$scope.categories=data;        
    	});
	};

	$scope.clearSubcat = function(){
		$scope.selectedSubcat='';
	};

	$scope.init = function() {
		
		$scope.quiz = {};
		$scope.quiz.questions = [];
		$scope.addQuestion();
		$scope.getCat();
	};

	$scope.addAnswer = function(question) {
		question.answers.push({correct:false});
	};

	$scope.deleteAnswer = function(index, question) {
		question.answers.splice(index, 1);
	}

	$scope.setCorrectAnswer=function(question,answer){
		question.invalid = false;
		answer.correct = !answer.correct;
	};

	$scope.addQuestion = function(){
		$scope.addQuestionDisabled = true;
		$scope.quiz.questions.push({answers:[{correct:false},{correct:false}]});
	};
		
	$scope.deleteQuestion=function(index){
		$scope.quiz.questions.splice(index,1);
	};

	$scope.validateQuiz = function(){
		var questions = $scope.quiz.questions;
		$scope.quiz.invalid = false;
		for(var i = 0; i < questions.length;i++){
			$scope.validateQuestion(questions[i]);
			if(questions[i].invalid){
				$scope.quiz.invalid = true;
			};
		};
	};

	$scope.validateQuestion = function(question){
		var answers = question.answers;
		question.invalid = true;
		for(var i = 0; i < answers.length;i++){
			
			if (answers[i].correct) {
				question.invalid =  false;
			};
		};
	};

	$scope.saveQuiz=function(){
		$scope.sendQuiz("draft");
	};

	$scope.reviewQuiz=function(){
		$scope.sendQuiz("review");
	};


	/** Redirect to result-page if quiz is valid  */
	$scope.sendQuiz = function(state){
		$scope.quiz.category_id = $scope.selectedSubcat.id;
		$scope.validateQuiz();
		if(!$scope.quiz.invalid){
			$scope.quiz.status = state;
			
			QuizData.create($scope.quiz)
				.success(function(data, status, headers, config) {
						$location.path('/admin/personalCabinet/'+state);
				})
	            .error(function(data, status, headers, config) {
	            	window.scrollTo(0,0);
					$scope.errorMsg = 'Ваш тест не збережено';
	            });
		};
	};

	$scope.init();

}]);
