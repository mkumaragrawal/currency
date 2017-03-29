angular.module('Convert', [])
  .controller('currConverter', ['$scope', '$http', function ($scope, $http) {
      $scope.rates = {};
      $http.get('http://api.fixer.io/latest?base=INR&symbols=USD,CAD,EUR')
        .then(function (res) {
            $scope.rates = res.data.rates;
            $scope.toType = $scope.rates.USD;
            $scope.fromType = $scope.rates.CAD;
            $scope.fromValue = 0.00;
	    $scope.myVar = false;
            $scope.currConvert();
	
        });
	$scope.toggle = function() {
        $scope.myVar = !$scope.myVar;
    		};
      $scope.currConvert = function () {
		

          $scope.toValue = $scope.fromValue * ($scope.toType * (1 / $scope.fromType));
          $scope.toValue = $scope.toValue.toFixed(2);
		if($scope.fromValue == 0.00)
		{
		$scope.fromValue = '';
		}
      };


$scope.filterValue = function($event){
        if(isNaN(String.fromCharCode($event.keyCode)) && (String.fromCharCode($event.keyCode) != '.')){
            $event.preventDefault();
        }
	 var flag = $scope.fromValue.replace(/[^0-9\.]+/g, '');

                if (flag.indexOf('.') != -1) {
                    if (flag.length > (flag.indexOf('.') + 2)) {
                        $event.preventDefault();
                    }
			if((String.fromCharCode($event.keyCode) == '.'))
				{
				$event.preventDefault();
					}
	
		}
	
};

 }]);