import React from 'react';
import {connect} from 'react-redux';
import {addOne, removeOne} from '../../actions/dummy-actions';
import AngularWrapper from './angular-inner-container/angular-wrapper';


class App extends React.Component {

  constructor(props) {
    super(props);
    this.addOne = this.addOne.bind(this);
    this.removeOne = this.removeOne.bind(this);
  }

  addOne(event) {
    this.props.dispatch(addOne());
  }

  removeOne(event) {
    this.props.dispatch(removeOne());
  }

  render() {
    return (
      <div className="react-container">
        <h1 className="title">React Container</h1>
        <div className="container-header">
          <div className="state-value">{this.props.dummy}</div>
          <button className="btn" onClick={this.addOne}>Add one</button>
          <button className="btn" onClick={this.removeOne}>Remove one</button>
        </div>
        <div className="container-child">
          <AngularWrapper />
        </div>
      </div>
    );
  }

}

const mapStateToProps = (state) => {
  return {
    dummy: state.dummy
  };
};

App = connect(mapStateToProps)(App);
export default App;
