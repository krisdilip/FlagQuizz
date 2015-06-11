var app = angular.module('FlagQuizz.controllers', []);
var lastScrollTop=0;

app.controller('AppCtrl', function($rootScope,$scope, $ionicModal, $timeout, $state) {
	//Load continent data
	if($scope.continents==undefined){
		$scope.continents = continents;
	};
  
	$scope.fn_ShowCountries = function(pCountry){
		$state.go("app.single", {continentId:(pCountry)});
	};

	$scope.fn_ShowQuiz = function(){
		$state.go("app.quiz",{});
	};
})

app.controller('ContinentCtrl', function($scope, $state) {

	//Load continent data
	if($scope.continents==undefined){
		$scope.continents = continents;
	};

	$scope.fn_ShowCountries = function(pCountry){
		$state.go("app.single", {continentId:(pCountry)});
	};
})

app.controller('CountriesCtrl', function($rootScope, $scope, $stateParams, $ionicScrollDelegate) {
 
	$rootScope.showSubheader = true;
 
	if($stateParams.continentId == "Africa"){
		$scope.pageTitle = "Africa";
		$scope.countries = africa;
	}else if($stateParams.continentId == "Asia"){
		$scope.pageTitle = "Asia";
		$scope.countries = asia;
	}else if($stateParams.continentId == "Europe"){
		$scope.pageTitle = "Europe";
		$scope.countries = europe;
	}else if($stateParams.continentId == "North America"){
		$scope.pageTitle = "North America";
		$scope.countries = northamerica;
	}else if($stateParams.continentId == "South America"){
		$scope.pageTitle = "South America";
		$scope.countries = southamerica;
	}else if($stateParams.continentId == "Oceania"){
		$scope.pageTitle = "Oceania";
		$scope.countries = oceania;
	}else if($stateParams.continentId == "Antarctica"){
		$scope.pageTitle = "Antarctica";
		$scope.countries = "";
	};
	
	$scope.scrollSubHeader = function() {
		var threshold = 100;
		var lscrollTop = $ionicScrollDelegate.$getByHandle('mainScroll').getScrollPosition().top;
		
		if( lscrollTop> threshold){
			$scope.$apply(function(){
				$rootScope.showSubheader = false;
			});
			
			lastScrollTop = lscrollTop
			
		}else if(lscrollTop < lastScrollTop){
			$scope.$apply(function(){
				$rootScope.showSubheader = true;
			});
			lastScrollTop = lscrollTop;
		};
	};
	
	$scope.continentFilter=function(c) {
		try{
			return (c.continent.toLowerCase()==$scope.pageTitle.toLowerCase()) ? true : false;
		}catch(err){
			return true;
		}
	};
	
});

app.controller('QuizCtrl', function($scope, $stateParams) {
	$scope.quiz = quiz;
});