'use strict';

/** Connection to back-end for quiz  */
yunakQuizApp.factory('QuizData', ['$http', '$location', function($http, $location){
    return{
      get: function(id){
            return $http.get('http://localhost:9292/assessments/'+id )
          },

      update: function(quiz){
            return $http.put("http://localhost:9292/admin/assessments/"+quiz.id, quiz);
          },
          
      create: function(quiz){       
            return $http.post('http://localhost:9292/admin/assessments', quiz)
          },

      getList: function(state){
            return $http.get('http://localhost:9292/admin/assessments/'+state) 
          },

      getCat: function(){
            return $http.get('http://localhost:9292/categories') 
          },

      queryList: function(state, queryData){
            return $http.post('http://localhost:9292/admin/assessments/'+state, queryData) 
          },

      delete: function(id){
            return $http.delete('http://localhost:9292/admin/assessments/'+id ) 
          },

      getComments: function(id){
            return $http.get('http://localhost:9292/admin/assessments/'+id+'/comments')
          }
    }
  }
]);


yunakQuizApp.service('tags', function($q) {
  var tags = [
    {"tag": "Tag1" },
    {"tag": "Tag2" },
    {"tag": "Tag3" },
    {"tag": "Tag4" },
    {"tag": "Tag5" },
    {"tag": "Tag6" },
    {"tag": "Tag7" },
    {"tag": "Tag8" },
    {"tag": "Tag9" },
    {"tag": "Tag10" }
  ];
  
  this.load = function() {
    var deferred = $q.defer();
    deferred.resolve(tags);
    return deferred.promise;
  };
});


