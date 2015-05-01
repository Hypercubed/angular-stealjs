'use strict';

import 'jquery';
import 'bower_components/bootstrap/dist/js/bootstrap';
import 'bower_components/bootstrap/dist/css/bootstrap.css!';

import angular from 'angular';
import app from 'components/app';

import 'components/routes';

angular.element(document).ready(function() {
  console.log('angular ready');
  angular.bootstrap(document.body, [ app.name ]);
});
