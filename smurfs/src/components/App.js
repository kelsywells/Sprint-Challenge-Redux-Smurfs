import React, { Component } from 'react';
import './App.css';
/*
 to wire this component up you're going to need a few things.
 I'll let you do this part on your own. 
 Just remember, `how do I `connect` my components to redux?`
 `How do I ensure that my component links the state to props?`
 */
class App extends Component {
  constructor(){
    super();
  }

  componentDidMount() {
    this.props.getSmurfs();
  }

  render() {

    this.props.

    return (
      <div className="App">

      </div>
    );
  }
}

const mapStateToProps = state => {
  console.log('state', state);
  return {
    smurfs: state.smurfs,
    error: state.error,
    fetching: state.fetchingSmurfs
  }
}

export default App;
