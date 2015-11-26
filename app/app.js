'use strict';

angular.module('angularCs', [])
	.controller('ArticlesCtrl', function($scope, $http){
	    $http.get('data/articles.json').then(function(articlesResponse) {
	      $scope.articles = articlesResponse.data;
	    });
	  });