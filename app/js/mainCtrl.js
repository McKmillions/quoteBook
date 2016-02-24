app.controller('mainCtrl', ['$scope', 'dataService', function($scope, dataService){
	$scope.quotes = dataService.getData();
	$scope.filterQuotes = {};

	$scope.addData = function() {
          // var obj = { text: $scope.quoteInput, author: 'Anonymous' };
          // quoteBook.addData(obj);
          dataService.addData($scope.quote);
          $scope.quote = {};
        }

	$scope.removeData = function(quote) {
		dataService.removeData(quote);
		quote = '';
	};


}])