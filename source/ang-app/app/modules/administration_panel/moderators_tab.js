(function (){
  var  app = angular.module('yunakQuiz.moderatorsTab' ,['ngRoute']);

    app.config(['$routeProvider',
      function($routeProvider) {
        $routeProvider.
          when('/administration-panel/moderatorsTab', {
            templateUrl: './modules/administration_panel/moderators_tab.html',
            controller: 'moderatorsCtrl'
          })
      }
    ]);

    app.controller('moderatorsCtrl', ['$scope', 'getAccess','$http', '$location', '$modal', 'Roles', function ($scope, getAccess,$http, $location, $modal, Roles) {
      $scope.tab = 'Модератори';
      $scope.roles = Roles;
      
      $scope.outputData={
        currentPage: 1,
        itemsPerPage: 10,
        searchData:'',
        status: 'enabled',
        roles: 3
      };
      getAccess($scope.tab).then(function(data){
          if(data) {
            $scope.searchQuery();
          } else {
            $location.path( "/404" );
          }
        },function(){
          $location.path( "/404" ); 
          }
      );

      $scope.searchQuery = function(){
        $scope.outputData.currentPage = 1;
        $scope.queryList();
      };

      $scope.queryList = function() {
        $http.post('http://localhost:9292/admin/users', $scope.outputData).success(function(data, status, headers, config) {
            $scope.updateData(data);        
        });
      };

      $scope.updateData = function(data){
        $scope.users = data.users;
        $scope.totalItems = data.totalItems;
      };

      $scope.deleteUser = function(userId){
        var modalDelete = $modal.open({
          templateUrl: 'modules/administration_panel/modalDeleteUser.html',
          controller: 'ModalConfirmCtrl',
          size: 'sm'
        });
        modalDelete.result.then(function () {
          $http.delete('http://localhost:9292/admin/users'+userId).success(function(data) {
            $scope.searchQuery();
          });
        });
      };

      $scope.blockUnblockUser = function(userId){
        var modalBlock = $modal.open({
          templateUrl: 'modules/administration_panel/modalBlockUser.html',
          controller: 'ModalConfirmCtrl',
          size: 'sm'
        });
        modalBlock.result.then(function () {
          $http.put('http://localhost:9292/admin/users'+userId).success(function(data) {
            $scope.searchQuery();
          });
        });
      };

      $scope.changeStatusUser = function(userId, userRole){
        var modalBlock = $modal.open({
          templateUrl: 'modules/administration_panel/modalStatusUser.html',
          controller: 'ModalStatusCtrl',
          size: 'sm', 
          resolve: {
            userRole: function () {
              return userRole;
            }
          }
        });
        modalBlock.result.then(function (newUserRole) {
          $scope.newUserRole = {
            role: newUserRole
          }
          $http.put('http://localhost:9292/admin/user_role'+userId, $scope.newUserRole).success(function(data) {
            $scope.searchQuery();
          });
        });
      };

    }]);

})();