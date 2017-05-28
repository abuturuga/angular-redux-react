import React from 'react';
import angular from 'angular';

class AngularApp extends React.Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    //this.$rootScope = angular.injector(['ng', 'APP']).get('$rootScope');
  //  angular.bootstrap(this.container, ['APP']);
  }

  render() {
    return (
      <div ref={c => {this.container = c;}}
          dangerouslySetInnerHTML={{ __html: 'test' }}>
      </div>
    );
  }

}

export default AngularApp;
