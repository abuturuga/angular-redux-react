import React from 'react';
import ReactDOM from 'react-dom';
import angular from 'angular';
import './angular-inner-container';


class AngularWrapper extends React.Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    //const element = ReactDOM.findDOMNode(this).querySelector('.angular-wrapper');
    //angular.bootstrap(element, ['angular-inner']);
  }

  createMarkup() {
    return {__html: `
      <div class="angular-wrapper" data-$injector="">
        <angular-inner></angular-inner>
      </div>`
    };
  }

  render() {
    return (
      <div>
        <div dangerouslySetInnerHTML={this.createMarkup()}></div>
      </div>
    );
  }

}

export default AngularWrapper;
