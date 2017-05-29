import React from 'react';
import {connect} from 'react-redux';
import {addOne, removeOne} from '../../actions/dummy-actions';
import {fetchOne} from '../../actions/fetch-actions';
import AngularWrapper from './angular-inner-container/angular-wrapper';


class App extends React.Component {

  constructor(props) {
    super(props);
    this.addOne = this.addOne.bind(this);
    this.removeOne = this.removeOne.bind(this);
    this.fetchOne = this.fetchOne.bind(this);
  }

  addOne(event) {
    this.props.dispatch(addOne());
  }

  removeOne(event) {
    this.props.dispatch(removeOne());
  }

  fetchOne(event) {
    this.props.dispatch(fetchOne());
  }

  render() {
    return (
      <div className="react-container">
        <h1 className="title">React Container</h1>
        <div className="container-header">
          <div className="state-values">
            <div className="state-value">
              <span className="label">dummy</span>
              <span>{this.props.dummy}</span>
            </div>

            <div className="state-value">
              <span className="label">fetch</span>
              <pre>{JSON.stringify(this.props.fetch, null, ' ')}</pre>
            </div>
          </div>
          <button className="btn" onClick={this.addOne}>Add one</button>
          <button className="btn" onClick={this.removeOne}>Remove one</button>
          <button className="btn" onClick={this.fetchOne}>Fetch one</button>
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
    dummy: state.dummy,
    fetch: state.fetch
  };
};

App = connect(mapStateToProps)(App);
export default App;
