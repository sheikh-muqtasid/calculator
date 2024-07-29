angular.module('calculatorApp', [])
.controller('CalculatorController', ['$scope', function($scope) {
    $scope.display = '';
    $scope.history = [];

    $scope.append = function(value) {
        $scope.display += value;
    };

    $scope.operation = function(op) {
        if (op === 'sqrt') {
            $scope.display += ' Math.sqrt(';
        } else if (op === '^') {
            $scope.display += ' ** ';
        } else {
            $scope.display += ' ' + op + ' ';
        }
    };

    $scope.clear = function() {
        $scope.display = '';
    };

    $scope.calculate = function() {
        try {
           
            $scope.display = $scope.display.replace(/(\d+)%/g, '($1/100)');
            var result = eval($scope.display);
            $scope.history.push($scope.display + ' = ' + result);
            $scope.display = result;
        } catch (e) {
            $scope.display = 'Error';
        }
    };
}]);
