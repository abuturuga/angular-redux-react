import angular from 'angular';
import ReactDOM from 'react-dom';
import ReactContainerController from './react-container-controller';

export default angular.module('react-container', [])
  .component('reactContainer', {
    binding: {},
    template: `<div>
    </div>`,
    controller: ReactContainerController
  });
