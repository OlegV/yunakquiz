'use strict'; 

//Ctrl for guest search page
guestSearch.controller('SearchCtrl', ['$scope', '$http', 
  'searchTag', 'guestSearchFactory',  
  function ($scope, $http, searchTag, guestSearchFactory) {
        
  // Variable initalization 
  $scope.allCats = [];
  $scope.tags = [];
  $scope.searchResults = {};

  // Select parCat and set subCat according to
  // parCat state
  $scope.selectSubCat = function(allCats, parCat) {

    parCat.search = !parCat.search;

    for (var i = 0 ; allCats.length > i ; i++){
      if (allCats[i].category_id == parCat.id) {
        allCats[i].search = parCat.search;
      };
    };
  };
        
  // Reciving all Categories from server in one 
  // array 
  guestSearchFactory.getAllCats().success(function(data){
    $scope.allCats = data;
  });

  // Function that creates searchRequest object and
  // Make search request 
  $scope.searchData = function(allCats, searchRequest){

    // Clean searchRequest variable
    $scope.searchRequest = {categories_id:[], tags:[]};

    for (var i = 0 ; allCats.length > i ; i++){
      if (allCats[i].search){
        $scope.searchRequest.categories_id.push(allCats[i].id);
      };
    };

    // Check if there were some categories_id 
    // if not then push all ids from allCats
    if ($scope.searchRequest.categories_id.length === 0){
      for (var i = 0 ; allCats.length > i ; i++) {
      	$scope.searchRequest.categories_id.push(allCats[i].id);
      };
    };

    // Adding all tags to request
    // and all tags to lower case 
    for (var i = 0 ; $scope.tags.length > i ; i++){
      $scope.searchRequest.tags.push($scope.tags[i].text.toLowerCase());
    };

    // Check if there were some tags
    // if not search response all quizzes
    if ($scope.searchRequest.tags.length === 0){
      $scope.searchRequest.tags = ['_']; // It takes all words 
    };

    $scope.searchRequest.currentPage = 0;

    // Main request to server for search
    // If it empty show error
    searchTag.request($scope.searchRequest, function(data){
      if (data.result.length === 0){
        
        $scope.searchResults = {};
        $scope.searchResults[0] = {title: 'Нічого не знайдено'};
        
        // Reset paginating 
        $scope.currentPage = 1;
        $scope.totalItems = 0;

      } else {
        $scope.searchResults = guestSearchFactory.tagsToArray(data.result);

        // Length of paginating 
        $scope.totalItems = data.length;
        $scope.currentPage = 1;
      };

    });

  };

  // Adding tags from results container 
  // To input search and check if same 
  // Tags are in tag array
  $scope.addTag = function(tag) {

    // Avoid duplication in tags 
    // And if it founds it writes 
    // in var duplicateFound
    for (var i = 0 ; $scope.tags.length > i ; i++) {
      if ($scope.tags[0].text === tag) {
        var duplicateFound = true;
      }; 
    };

    if (!duplicateFound) {
      var text = {text: tag}
      $scope.tags.push(text);
      // Set variable to false to avoid errors
      var duplicateFound = false;
    };
  };

  // Pagination part
  // Init pagination part 
  $scope.totalItems = 0;
  $scope.currentPage = 1;

  // Function that called when page in pagination is 
  // Changed 
  $scope.pageChanged = function() {

    // Giving info on what page we are now 
    $scope.searchRequest.currentPage = ($scope.currentPage-1);

    // And request to server 
    searchTag.request($scope.searchRequest, function(data){

      $scope.searchResults = guestSearchFactory.tagsToArray(data.result);

    });
  };

}]);