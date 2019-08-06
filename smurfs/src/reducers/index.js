import {  
  FETCH_SMURFS_START, 
  FETCH_SMURFS_SUCCESS, 
  FETCH_SMURFS_FAIL, 
  ADD_SMURF,
  ADD_SMURF_SUCCESS,
  ADD_SMURF_FAIL
} from "../actions";

/*
  Be sure to import in all of the action types from `../actions`
*/

/*
 Your initial/default state for this project could *Although does not have to* look a lot like this
 {
   smurfs: [],
   fetchingSmurfs: false
   addingSmurf: false
   updatingSmurf: false
   deletingSmurf: false
   error: null
 }
*/
const initialState =
{
  smurfs: [],
  fetchingSmurfs: false,
  addingSmurf: false,
  error: null
}

/*
  You'll only need one smurf reducer for this project.
  Feel free to export it as a default and import as rootReducer. 
  This will guard your namespacing issues.
  There is no need for 'combineReducers' in this project.
  Components can then read your store as, `state` and not `state.fooReducer`.
*/

const rootReducer = (state = initialState, action) => {
  console.log("reducer", action);
  switch (action.type) {
    case FETCH_SMURFS_START:
      return {
        ...state,
        error: "",
        fetchingSmurfs: true,
        addingSmurf: false,
        smurfs: []
      }
    case FETCH_SMURFS_SUCCESS: 
      (console.log(action.payload));
      return {
        ...state,
        error: null,
        fetchingSmurfs: false,
        addingSmurf: false,
        smurfs: [...state.smurfs, ...action.payload]
      }
    case FETCH_SMURFS_FAIL: 
      return {
        ...state,
        error: action.payload
      }
    case ADD_SMURF:
      return {
        ...state,
        error: "",
        fetchingSmurfs: false,
        addingSmurf: true,
        smurfs: []
      }
    case ADD_SMURF_SUCCESS:
      return {
        ...state,
        error: null,
        addingSmurf: false,
        smurfs: action.payload
      }
    case ADD_SMURF_FAIL:
      return{
        ...state,
        error: action.payload,
        addingSmurf: false,
      }
      default: return state;
    }
    
  }


    // let currentState= rootReducer(initialState, addSmurf());

    export default rootReducer;

