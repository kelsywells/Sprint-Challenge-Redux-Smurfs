import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import getSmurfs from '../actions';
import SmurfsList from './SmurfsList';



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
    // if(this.props.fetching){
    //   <h2> Fetching Smurf data...</h2>;
    // }     this always gives me an error?
    return (
      <div className="App">
        <SmurfsList smurfs = {this.props.smurfs} />

        <form>
          <input type="text" placeholder="Smurf Name"/>
          <input type="number" placeholder="Smurf Age" />
          <input type="number" placeholder="Smurf Height"/>
          <button type="submit">Add Smurf!</button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => {
  console.log('state', state);
  return {
    smurfs: state.smurfs,
    error: state.smurfs,
    fetching: state.fetchingSmurfs
  }
}


export default connect (
  mapStateToProps,
  {getSmurfs}
  )
  (App);



