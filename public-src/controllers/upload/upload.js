import angular from 'angular';
import uiRouter from 'angular-ui-router';
import uploadCtrl from './upload.controller';

let uploadModule = angular.module('upload', [
  uiRouter
])

.config(($stateProvider, $urlRouterProvider) => {

  $stateProvider
    .state('upload', {
      url: '/upload',
      controller: uploadCtrl,
      template: require('./upload.jade')
    });
})

export default uploadModule;
