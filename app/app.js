'use strict';

angular.module('angularCs', [])
/*
	.controller('ArticlesCtrl', function($scope, $http){
	    $scope.articles = [
                       { id: 1, name: "Pizza Vegetaria", price: 5 },
                       { id: 2, name: "Pizza Salami",    price: 5.5 },
                       { id: 3, name: "Pizza Thunfisch", price: 6 }
                     ];
                   });
*/
	.controller('ArticlesCtrl', function($scope, $http){
	    $http.get('articles.json').then(function(articlesResponse) {
	      $scope.articles = articlesResponse.data;
	    });
	  });