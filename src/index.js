if (module.hot) {
  module.hot.accept();
}

import angular from 'angular';
import 'babel-polyfill';
import store from './store';
import './ng-redux/ng-redux';
import './angular-container/angular-container';

angular.module('APP', ['ng-redux', 'angular-container'])
  .config((ngReduxProvider) => {
    ngReduxProvider.setStore(store);
  });
