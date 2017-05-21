import React from 'react';
import {connect} from 'react-redux';
import {addOne} from '../../../actions/dummy-actions';

class App extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    console.log(this.props);
    return (
      <div className="react-app">
        This is the react app
        <button onClick={() => this.props.dispatch(addOne())}>Add One</button>
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
