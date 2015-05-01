'use strict';

import 'components/main/main.css!';

import app from 'components/app';

/**
 * @ngdoc function
 * @name angularStealjsApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the angularStealjsApp
 */

app
  .controller('MainCtrl', ['$scope', function ($scope) {

    $scope.awesomeThings = {
      'Bootstrap': 'HTML5 Boilerplate is a professional front-end template for building fast, robust, and adaptable web apps or sites.',
      'AngularJS': 'Sleek, intuitive, and powerful front-end framework for faster and easier web development.',
      'Karma': 'Spectacular Test Runner for JavaScript.',
      'StealJS': 'Futuristic JavaScript dependency loader and builder.'
    };

  }]);
