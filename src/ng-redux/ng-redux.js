import angular from 'angular';
import ngRedux from './ng-redux-provider';

export default angular.module('ng-redux', [])
  .provider('ngRedux', ngRedux);
