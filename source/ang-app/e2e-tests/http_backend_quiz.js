exports.httpBackendMock = function() {
	angular.module('httpBackendMock', ['yunakQuiz', 'ngMockE2E'])
    .run(function($httpBackend) {

    var categories = [
    	{"id": 1, "category_id": 0, "title": "Cпорт"}, 
    	{"id": 2, "category_id": 1, "title": "Футбол"},
    	{"id": 3, "category_id": 0, "title": "Комп'ютери"},
    	{"id": 4, "category_id": 0, "title": "Туризм"},
    	{"id": 5, "category_id": 4, "title": "Країни"}
    	];
	
	var quizzes = { "quizzes" :[{"id":12,"category_id":2,"title":"14Тест на знання правил футболу","description":"Детальний опис тесту","status":"draft","created_at":"2014-10-30 13:05:10 UTC","updated_at":"2014-10-30 13:05:10 UTC","category":{"title":"Футбол","category":{"title":"Спорт"}}},{"id":14,"category_id":2,"title":"16Тест на знання правил футболу","description":"Детальний опис тесту","status":"draft","created_at":"2014-10-30 13:05:11 UTC","updated_at":"2014-10-30 13:05:11 UTC","category":{"title":"Футбол","category":{"title":"Спорт"}}},{"id":16,"category_id":2,"title":"18Тест на знання правил футболу","description":"Детальний опис тесту","status":"draft","created_at":"2014-10-30 13:05:11 UTC","updated_at":"2014-10-30 13:05:11 UTC","category":{"title":"Футбол","category":{"title":"Спорт"}}},{"id":18,"category_id":2,"title":"20Тест на знання правил футболу","description":"Детальний опис тесту","status":"draft","created_at":"2014-10-30 13:05:11 UTC","updated_at":"2014-10-30 13:05:11 UTC","category":{"title":"Футбол","category":{"title":"Спорт"}}},{"id":19,"category_id":2,"title":"21Тест на знання правил футболу","description":"Детальний опис тесту","status":"draft","created_at":"2014-10-30 13:05:11 UTC","updated_at":"2014-10-30 13:05:11 UTC","category":{"title":"Футбол","category":{"title":"Спорт"}}},{"id":21,"category_id":2,"title":"23Тест на знання правил футболу","description":"Детальний опис тесту","status":"draft","created_at":"2014-10-30 13:05:12 UTC","updated_at":"2014-10-30 13:05:12 UTC","category":{"title":"Футбол","category":{"title":"Спорт"}}},{"id":22,"category_id":2,"title":"24Тест на знання правил футболу","description":"Детальний опис тесту","status":"draft","created_at":"2014-10-30 13:05:12 UTC","updated_at":"2014-10-30 13:05:12 UTC","category":{"title":"Футбол","category":{"title":"Спорт"}}},{"id":23,"category_id":2,"title":"25Тест на знання правил футболу","description":"Детальний опис тесту","status":"draft","created_at":"2014-10-30 13:05:12 UTC","updated_at":"2014-10-30 13:05:12 UTC","category":{"title":"Футбол","category":{"title":"Спорт"}}},{"id":24,"category_id":2,"title":"26Тест на знання правил футболу","description":"Детальний опис тесту","status":"draft","created_at":"2014-10-30 13:05:12 UTC","updated_at":"2014-10-30 13:05:12 UTC","category":{"title":"Футбол","category":{"title":"Спорт"}}},{"id":25,"category_id":2,"title":"27Тест на знання правил футболу","description":"Детальний опис тесту","status":"draft","created_at":"2014-10-30 13:05:12 UTC","updated_at":"2014-10-30 13:05:12 UTC","category":{"title":"Футбол","category":{"title":"Спорт"}}},{"id":26,"category_id":2,"title":"28Тест на знання правил футболу","description":"Детальний опис тесту","status":"draft","created_at":"2014-10-30 13:05:13 UTC","updated_at":"2014-10-30 13:05:13 UTC","category":{"title":"Футбол","category":{"title":"Спорт"}}},{"id":27,"category_id":2,"title":"29Тест на знання правил футболу","description":"Детальний опис тесту","status":"draft","created_at":"2014-10-30 13:05:13 UTC","updated_at":"2014-10-30 13:05:13 UTC","category":{"title":"Футбол","category":{"title":"Спорт"}}},{"id":28,"category_id":2,"title":"30Тест на знання правил футболу","description":"Детальний опис тесту","status":"draft","created_at":"2014-10-30 13:05:13 UTC","updated_at":"2014-10-30 13:05:13 UTC","category":{"title":"Футбол","category":{"title":"Спорт"}}}],  "queryData": {"totalItems": 13}}

 	var quiz = {"id":"1","title":"Тест на знання правил футболу","category_id":2,"description":"Детальний опис тесту","questions":[{"id":1,"quiz_id":1,"title":"Скільки гравців в команді?","description":"Пояснення: Згідно правил на полі знаходиться 11 гравців однієї команди","created_at":"2014-10-13T21:41:36.547Z","updated_at":"2014-10-13T21:41:36.547Z","answers":[{"id":1,"question_id":1,"title":"11","correct":true},{"id":2,"question_id":1,"title":"12","correct":false},{"id":3,"question_id":1,"title":"5","correct":false}]},{"id":2,"quiz_id":1,"title":"Скільки триває один тайм?","description":"demo","created_at":"2014-10-13T21:41:36.570Z","updated_at":"2014-10-13T21:41:36.570Z","answers":[{"id":4,"question_id":2,"title":"20хв","correct":false},{"id":5,"question_id":2,"title":"45хв","correct":true},{"id":6,"question_id":2,"title":"до останнього гравця","correct":false}]},{"id":3,"quiz_id":1,"title":"Що відбудеться, коли гравець торкнеться м’яча рукою?","description":"demo","created_at":"2014-10-13T21:41:36.603Z","updated_at":"2014-10-13T21:41:36.603Z","answers":[{"id":7,"question_id":3,"title":"Порушенння правил","correct":true},{"id":8,"question_id":3,"title":"Штрафний удар","correct":true},{"id":9,"question_id":3,"title":"Дадуть пиріжок","correct":false},{"id":10,"question_id":3,"title":"Дадуть в голову","correct":false}]}]} 
 	var comments = [{"id":1,"quiz_id":1,"text":"Дуже гарний тест","created_at":"2014-10-29T12:32:03.588Z","updated_at":"2014-10-29T12:32:03.588Z"},{"id":2,"quiz_id":1,"text":"Потрыбно додати питання із декількома правильними відповідями","created_at":"2014-10-29T12:32:03.742Z","updated_at":"2014-10-29T12:32:03.742Z"}]
	var categories = [{"id":1,"category_id":0,"title":"Спорт","created_at":"2014-10-30 13:05:05 UTC","updated_at":"2014-10-30 13:05:05 UTC","categories":[{"id":2,"category_id":1,"title":"Футбол","created_at":"2014-10-30 13:05:05 UTC","updated_at":"2014-10-30 13:05:05 UTC","categories":[]},{"id":3,"category_id":1,"title":"Хокей","created_at":"2014-10-30 13:05:05 UTC","updated_at":"2014-10-30 13:05:05 UTC","categories":[]}]},{"id":4,"category_id":0,"title":"Історія","created_at":"2014-10-30 13:05:06 UTC","updated_at":"2014-10-30 13:05:06 UTC","categories":[{"id":5,"category_id":4,"title":"Історія України","created_at":"2014-10-30 13:05:06 UTC","updated_at":"2014-10-30 13:05:06 UTC","categories":[]},{"id":6,"category_id":4,"title":"Історія світу","created_at":"2014-10-30 13:05:06 UTC","updated_at":"2014-10-30 13:05:06 UTC","categories":[]}]}];


    $httpBackend.whenGET('http://localhost:9292/assessments/1').respond(quiz);
    $httpBackend.whenGET('http://localhost:9292/admin/assessments/1').respond(quiz);
 	$httpBackend.whenGET('http://localhost:9292/admin/assessments/1/comments').respond(comments);
 	$httpBackend.whenGET('http://localhost:9292/categories').respond(categories);
 	$httpBackend.whenPOST('http://localhost:9292/admin/assessments/draft').respond(quizzes);
	$httpBackend.whenPOST('http://localhost:9292/admin/assessments').respond(function(method, url, data, headers){
 			return [200, "ok", {}];			
 		});

 	$httpBackend.whenPUT('http://localhost:9292/admin/assessments/1')
 		.respond(function(method, url, data, headers){
 			
	 		quiz.description = (JSON.parse(data)).description

	 		// quiz = angular.toJson(quiz);
 			return [200, quiz, {}];			
 		});

    $httpBackend.whenGET(/modules\/\w+.*/).passThrough();
 

    $httpBackend.whenGET(/^\w+.*/).passThrough();
    // $httpBackend.whenPOST(/^\w+.*/).passThrough();
 
    //  $httpBackend.whenPOST('/phones').respond(function(method, url, data) {
    // var quiz = angular.fromJson(data);
    // phones.push(quiz);
    // return [200, quiz, {}];
   
	
  });
};