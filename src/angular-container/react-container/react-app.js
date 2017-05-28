import React from 'react';
import {connect} from 'react-redux';
import {addOne} from '../../actions/dummy-actions';


class App extends React.Component {

  constructor(props) {
    super(props);
    this.addOne = this.addOne.bind(this);
  }

  addOne(event) {
    this.props.dispatch(addOne());
  }

  render() {
    return (
      <div className="react-container">
        <h1 className="title">React Container</h1>
        <div className="container-header">
          <div className="state-value">{this.props.dummy}</div>
          <button className="btn" onClick={this.addOne}>Add one</button>
        </div>
        <div className="container-child"></div>
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
