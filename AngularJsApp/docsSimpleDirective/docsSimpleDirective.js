angular
  .module('testApp')
  .controller('Controller', [
    '$scope',
    function ($scope) {
      $scope.customer = {
        name: 'Naomi',
        address: '1600 Amphitheatre',
      };
    },
  ])
  .directive('docsSimpleDirective', function () {
    return {
      template: 'Name: {{customer.name}} Address: {{customer.address}}',
    };
  });
