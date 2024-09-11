'use strict';

const angular = require('angular');

// Define the `testApp` module
angular.module('testApp', []);

require('./test-directive/test-directive.js');
require('./test-directive2/test-directive2.js');
require('./test-directive3/test-directive3.js');
require('./test-directive4/test-directive4.js');
require('./isolateScopeWithController/isolateScopeWithController.js');
require('./docsSimpleDirective/docsSimpleDirective.js');

//angularJs controller
require('./studentController/studentController.js');
require('./homePageController/homePageController.js');

