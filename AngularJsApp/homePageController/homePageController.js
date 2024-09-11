angular.module('testApp').controller('homePageController', [
    '$scope', 'checkValues', //userProfileService
    /*ignore jslint start*/
    function ($scope, checkValues) {
        /*ignore jslint end*/
        'use strict';

        $scope.iAm = 'HomePageController';
        $scope.displayMode = 'homepageController';
        $scope.showUserName = false;

        $scope.model = {
            user: '',
            userName: ''
        };

        var initialize = function () {
            $scope.getUserData();
        };

        $scope.getUserData = function () {

            // userProfileService.getForCurrentUser()
            //     .then(function (profile) {
            //         if (!checkValues.isNullOrUndefined(profile.user)) {
            //             if (!checkValues.isNullOrUndefined(profile.user.firstName) &&
            //                 !checkValues.isNullOrUndefined(profile.user.lastName)) {
            //                 var firstName = profile.user.firstName,
            //                     lastName = profile.user.lastName;

            //                 $scope.showUserName = true;
            //                 $scope.model.userName = firstName + ' ' + lastName;
            //             }

            //         }
            //     });
        };

        initialize();
    }
]);