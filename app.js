(function() {
  'use strict';

   angular.module('NameCalculator', [])
       .controller('NameCalculatorController', function($scope) {
          $scope.name="";
          $scope.totalValue = 0;

          $scope.displayNumeric = function() {
             let totalNameValue =
                    calculateNumericForString($scope.name);
             $scope.totalValue = totalNameValue;
          };

          function calculateNumericForString(s) {
              let totalStringValue = 0;
              for (let i = 0; i < s.length; i++) {
                 totalStringValue += s.charCodeAt(i);
              }
              return totalStringValue;
          }
       });
})();
