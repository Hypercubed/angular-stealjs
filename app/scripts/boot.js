'use strict';

import angular from 'angular';
import app from 'scripts/app';

import 'scripts/controllers/main';
import 'scripts/controllers/about';

angular.element(document).ready(function() {
  console.log('angular ready');
  angular.bootstrap(document.body, [ app.name ]);
});
