(function() {

  var app = angular.module('testApp');

  app.directive('isolateScopeWithController', function () {
      
    var controller = ['$scope', function ($scope) {

          function init() {
              $scope.items = angular.copy($scope.datasource);
          }

          init();

          $scope.addItem = function () {
              $scope.add();

              //Add new customer to directive scope
              $scope.items.push({
                  name: 'New Directive Controller Item'
              });
          };
      }],
        
      template = '<button ng-click="addItem()">Add Item</button><ul>' +
                 '<li ng-repeat="item in items">{{ ::item.name }}</li></ul>';
      
      return {
          restrict: 'EA', //Default in 1.3+
          scope: {
              datasource: '=',
              add: '&',
          },
          controller: controller,
          template: template
      };
  });

}());