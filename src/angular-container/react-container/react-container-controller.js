import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import store from '../../store';
import App from './react-app';


class Controller {

  constructor($element) {
    this.$element = $element;
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

Controller.$inject = ['$element'];
export default Controller;
