'use strict';

// Declare app level module which depends on views, and components
angular.module('yunakQuiz', [
  'ngRoute',
  'yunakQuiz.measures',
  'yunakQuiz.assessments',
  'yunakQuiz.users',
  'yunakQuiz.sessions',
  'yunakQuiz.version',
  'yunakQuiz.headerMenu',
  'yunakQuiz.guestSearch',
  'yunakQuiz.statistics',
  'yunakQuiz.staticPartialsRoute',
  'yunakQuiz.categoriesContainer',
  'yunakQuiz.parentCatPage',
  'yunakQuiz.subcategory',
  'yunakQuiz.faqAdmin',
  'yunakQuiz.faqPage'
]).config(['$routeProvider',
  	  function($routeProvider) {
    		$routeProvider.
      		  when('/', {
        		templateUrl: 'modules/partials/home-page-greetings.html',
      		  }).
      		  otherwise({
        	  redirectTo: '/'
      });
  }]);

