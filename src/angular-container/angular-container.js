import angular from 'angular';
import controller from './angular-container-controller';
import './react-container/react-container';


angular.module('angular-container', ['react-container'])
  .component('angularContainer', {
    bindings: {},
    template: `
    <div class="angular-container">
      <h1 class="title">Angular Container</h1>
      <div class="container-header">
        <div class="state-value">{{$ctrl.dummy}}</div>
        <pre class="state-value">{{$ctrl.fetch | json}}</pre>
        <button class="btn" ng-click="$ctrl.addOne()">Add one</button>
        <button class="btn" ng-click="$ctrl.removeOne()">Remove one</button>
        <button class="btn" ng-click="$ctrl.fetchOne()">Fetch one</button>
      </div>
      <div class="container-child">
        <react-container></react-container>
      </div>
    </div>`,
    controller
  });
