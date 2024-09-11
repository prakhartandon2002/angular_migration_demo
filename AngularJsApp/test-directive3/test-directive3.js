angular.module('testApp')
    .directive('testDirective3', function(){
        return {
            restrict: 'E',
            scope: {},
            template: '<div style="color: red;">' +
                        '<b>{{vm.myProperty}}</b>'  +
                    '</div>',
            controller: function(){
                var vm = this;
                vm.myProperty = 'Test Directive 3 is in the house!';
            },
            controllerAs: 'vm'
        };
    });
