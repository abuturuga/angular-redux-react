import angular from 'angular';
import controller from './react-container-controller';


angular.module('react-container', [])
  .component('reactContainer', {
    bindings: {},
    template: '<div></div>',
    controller
  });
