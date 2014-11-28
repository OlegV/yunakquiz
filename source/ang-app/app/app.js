'use strict';

// Declare app level module which depends on views, and components
angular.module('yunakQuiz', [
  'ui.bootstrap',
  'ngRoute',
  'ngResource',
  'ngAnimate',
  'yunakQuiz.measures',
  'yunakQuiz.assessments',
  'yunakQuiz.userStatistic',
  'yunakQuiz.cabinet',
  'yunakQuiz.users',
  'yunakQuiz.sessions',
  'yunakQuiz.version',
  'yunakQuiz.administrationPanel',
  'yunakQuiz.headerMenu',
  'yunakQuiz.guestSearch',
  'yunakQuiz.statistics',
  'yunakQuiz.staticPartialsRoute',
  'yunakQuiz.categoriesContainer',
  'yunakQuiz.subcategory',
  'ngTagsInput',
  'yunakQuiz.parentCatPage',
  'yunakQuiz.faqPage',
  'yunakQuiz.permission'
])
.config(['$routeProvider', '$httpProvider',     
  function($routeProvider, $httpProvider) {
    $httpProvider.defaults.withCredentials = true;
    $routeProvider.
      when('/', {
        templateUrl: 'modules/partials/home-page-greetings.html',
      }).
      when('/404', {
        templateUrl: 'modules/404/404.html',
      }).
      when('/500', {
        templateUrl: 'modules/404/500.html',
      }).
      otherwise({
        redirectTo: '/404'
      });
}]);

