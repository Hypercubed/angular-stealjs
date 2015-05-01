'use strict';

import app from 'components/app';

import 'components/main/main';
import 'components/about/about';

app
	.config(['$routeProvider', function ($routeProvider) {
		$routeProvider
			.when('/', {
				templateUrl: 'components/main/main.html',
				controller: 'MainCtrl'
			})
			.when('/about', {
				templateUrl: 'components/about/about.html',
				controller: 'AboutCtrl'
			})
			.otherwise({
				redirectTo: '/'
			});
	}]);
