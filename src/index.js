import angular from 'angular';
import 'babel-polyfill';
import store from './store';
import './angular-container/container';

angular.module('APP', ['page'])
  .config(() => {
    console.log(store);
    console.log('config started');
  });
