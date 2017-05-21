import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import store from '../../store';
import App from './react-app/app.js';

class ReactContainerController {

  constructor($scope, $element, ngRedux) {
    this.$scope = $scope;
    this.$element = $element;
  }

  $onInit() {
  }

  $postLink() {
    ReactDOM.render(
      <Provider store={store}>
        <App />
      </Provider>,
      this.$element[0]
    );
  }

}

ReactContainerController.$inject = ['$scope', '$element', 'ngRedux'];
export default ReactContainerController;
