import angular from 'angular';
import PageController from './page-controller';
import './react-envinroment/react-container';

export default angular.module('page', ['react-container'])
  .controller('PageController', PageController);
