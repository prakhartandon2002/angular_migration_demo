angular.module('testApp')
    .directive('testDirective4', function(){
        return {
            restrict: 'E',
            scope: {},
            template: '<div style="color: red;">' +
                        '<b>{{vm.myProperty}}</b>'  +
                    '</div>',
            controller: function(){
                var vm = this;
                vm.myProperty = 'Test Directive 4 is in the house!';
            },
            controllerAs: 'vm'
        };
    });