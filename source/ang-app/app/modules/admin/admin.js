'use strict';

angular.module('yunakQuiz.admin', ['ngRoute'])
.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/admin', {
    templateUrl: 'modules/admin/admin.html',
    controller: 'AdminCtrl',
    controllerAs: "admin"
  });
}])

.constant('tabs', [
  {name :   'admin1',
   temp :   '.modules/admin/admin-1.html',
   caption:   'Admin Tab N1' 
  },

  {name :   'admin2',
   temp :   '.modules/admin/admin-2.html',
   caption:   'Admin Tab No 2'
  },

  {name :   'admin3',
   temp :   '.modules/admin/admin-3.html',
     caption:   'Admin Tab # 3'
  },

  {name :   'admin4',
   temp :   '.modules/admin/admin-4.html',
     caption:   'Admin Tab Mumber Four'
  },

  {name :   'moder1',
   temp :   '.modules/admin/moder-1.html',
     caption:   'Moderator Tab Number One'
  },

  {name :   'moder2',
   temp :   '.modules/admin/moder-2.html',
     caption:   'Moder Tab n 2'
  },

  {name :   'moder3',
   temp :   '.modules/admin/moder-3.html',
   caption:   'Moder Tab nO 3'
  }

  // ,{name :   'comm1',
  //  temp :  '.modules/admin/comm-1.html',
    //   caption:   'ANYTHING CAN BE HERE'
  // },

  // {name :  'comm2',
  //  temp :  '.modules/admin/comm-2.html',
  //  caption:  'SOMETHING ELSE IS HERE'
  // },

  // {name :  'comm3',
  //  temp :  '.modules/admin/comm-3.html',
  //  caption:  'EXTREMELY DIFFERENT LAYS HERE'
  // }
])


.factory('getBackEnd', ["$location", "$http", "tabs", function($location, $http, tabs) {
  function getData(){
    console.log("inside getData: ");
    return $http.get("http://localhost:9292/admin")
  }
  return {
    getAccess: function(){
      console.log("inside getAccess: ");
      getData().success(function(data){
        console.log("inside getData success: ");
        var result = [];
        var givenTabs = tabs;
        var userAccess = data;
        
        var i=0;
        var j=0;
        var tlen = givenTabs.length;
        var alen = userAccess.length;
        for (j; j < alen; j++) {
          for (i; i < tlen; i++) {
            if(givenTabs[i].name == userAccess[j]){
              result.push([givenTabs[i].name, givenTabs[i].temp, givenTabs[i].caption]);
            }
          };
          i = 0;
        };
        console.log("afer cycle: " + result);
        return result;
      })
    }
  }
  // var myPromise = $http.get("http://localhost:9292/admin");
 //     var myObj = {
 //       promise : myPromise,
 //       data : {}
 //     }
  // myPromise.then(function(response) {
 //     var result = [];
  //  var givenTabs = tabs;
  //  var userAccess = response.data;
    
  //  var i=0;
  //  var j=0;
  //  var tlen = givenTabs.length;
  //  var alen = userAccess.length;
  //  for (j; j < alen; j++) {
  //    for (i; i < tlen; i++) {
  //      if(givenTabs[i].name == userAccess[j]){
  //        result.push([givenTabs[i].name, givenTabs[i].temp, givenTabs[i].caption]);
  //      }
  //    };
  //    i = 0;
  //  };
  //  // console.log("result afret cycle: " + result);
  //  myObj = {data: result};
 //     console.log("after for: " + myObj.data);
 //     // return myObj;
 //    });
 //    // console.log("after then: " + myObj.data);
 //     return myObj;

}])



.controller("AdminCtrl", ["$location", "$scope", "$http", 'getBackEnd', function($location, $scope, $http, getBackEnd){
  var asd; 
  console.log("begin: ");
  asd = getBackEnd.getAccess.resolved();
  // asd = getBackEnd.getAccess();
  console.log("after begin: " + asd);
  $scope.results = asd;
}])