if (module.hot) {
  module.hot.accept();
}

import './style.scss';
import angular from 'angular';
import 'babel-polyfill';
import store from './store';
import './ng-redux/ng-redux';
import './angular-container/angular-container';
import Vanilla from './vanilla';

angular.module('APP', ['ng-redux', 'angular-container'])
  .config((ngReduxProvider) => {
    ngReduxProvider.setStore(store);
  });

const vanilla = new Vanilla(store);
document.querySelector('#vanila-root')
  .appendChild(vanilla.render());
