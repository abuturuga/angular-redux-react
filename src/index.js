if (module.hot) {
  module.hot.accept();
}

import angular from 'angular';
import 'babel-polyfill';
import store from './store';
import './ng-redux/ng-redux';
import './angular-container/container';

angular.module('APP', ['ng-redux', 'page'])
  .config((ngReduxProvider) => {
    ngReduxProvider.setStore(store);
  });
