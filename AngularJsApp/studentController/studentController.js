var mainApp = angular.module("testApp");
         
mainApp.service('studentController', [function() {
  var self = this;
  self.student = {
      firstName: "FirstName",
      lastName: "LastName",
      
      fullName: function() {
        var studentObject;
        studentObject = self.student;
        return studentObject.firstName + " " + studentObject.lastName;
      }
  };
}]);