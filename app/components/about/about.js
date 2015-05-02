'use strict';

import app from 'app/components/app';

class AboutCtrl {
  /*@ngInject*/
  constructor(){
    this.value = 0;
    console.log('about!');
  }
}

/**
 * @ngdoc function
 * @name angularStealjsApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the angularStealjsApp
 */
app
  .controller('AboutCtrl', AboutCtrl);
