import { useReducer, useState } from 'react';
import './App.css';

const initialState = {
  firstName: "",
  lastName: "",
  phone: "",
  email: "",
  address: "",
  city: "",
  stateName: "",
  postal: "",
  highlighter: "",
}

const ACTIONS = {
  FIRST_NAME: "FIRST_NAME",
  LAST_NAME: "LAST_NAME",
  PHONE: "PHONE",
  EMAIL: "EMAIL",
  ADDRESS: "ADDRESS",
  CITY: "CITY",
  STATE_NAME: "STATE_NAME",
  POSTAL: "POSTAL",
  EMPTY_FIELDS: "EMPTY_FIELDS",
  EVAL_FIRST_NAME: "EVAL_FIRST_NAME",
  EVAL_LAST_NAME: "EVAL_LAST_NAME",
  EVAL_PHONE: "EVAL_PHONE",
  EVAL_EMAIL: "EVAL_EMAIL",
  EVAL_CITY: "EVAL_CITY",
  EVAL_STATE_NAME: "EVAL_STATE_NAME",
  EVAL_POSTAL: "EVAL_POSTAL"
}

const reducer = (state,{type,payload}) => {
  switch(type) {
    case ACTIONS.FIRST_NAME:
      return {...state, highlighter: "", firstName: payload.target.value}
    case ACTIONS.LAST_NAME:
      return {...state, highlighter: "", lastName: payload.target.value}
    case ACTIONS.PHONE:
      return {...state, highlighter: "", phone: payload.target.value}
    case ACTIONS.EMAIL:
      return {...state, highlighter: "", email: payload.target.value}
    case ACTIONS.ADDRESS:
      return {...state, highlighter: "", address: payload.target.value}
    case ACTIONS.CITY:
      return {...state, highlighter: "", city: payload.target.value}
    case ACTIONS.STATE_NAME:
      return {...state, highlighter: "", stateName: payload.target.value}
    case ACTIONS.POSTAL:
      return {...state, highlighter: "", postal: payload.target.value}
    case ACTIONS.EMPTY_FIELDS:
      return {...state, highlighter: payload}
    case ACTIONS.EVAL_FIRST_NAME:
      return {...state, highlighter: payload}
    case ACTIONS.EVAL_LAST_NAME:
      return {...state, highlighter: payload}
    case ACTIONS.EVAL_PHONE:
      return {...state, highlighter: payload}
    case ACTIONS.EVAL_EMAIL:
      return {...state, highlighter: payload}
    case ACTIONS.EVAL_CITY:
      return {...state, highlighter: payload}
    case ACTIONS.EVAL_STATE_NAME:
      return {...state, highlighter: payload}
    case ACTIONS.EVAL_POSTAL:
      return {...state, highlighter: payload}

    default:
      return state
  }
}

function App() {

  const [newState,dispatch] = useReducer(reducer, initialState)
  const [show,setShow] = useState(true);

  const Evaluate = () => {
    console.log(newState);
    if(newState.firstName === "" || newState.lastName === "" || newState.phone === "" || newState.email === "" || newState.address === "" || newState.city === "" || newState.stateName === "" || newState.postal === ""){
      dispatch({type:ACTIONS.EMPTY_FIELDS, payload: "Fields must not be empty!"});
    } else {
      if(!/^[a-zA-Z\s]*$/.test(newState.firstName)){ dispatch({type:ACTIONS.EVAL_FIRST_NAME, payload: "Enter valid First Name"}); }
      else if(!/^[a-zA-Z\s]*$/.test(newState.lastName)){ dispatch({type:ACTIONS.EVAL_LAST_NAME, payload: "Enter valid Last Name"}); }
      else if(!/^(\d){10}$/.test(newState.phone)){ dispatch({type:ACTIONS.EVAL_PHONE, payload: "Enter valid Phone"}); }
      else if(!/^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/.test(newState.email)){ dispatch({type:ACTIONS.EVAL_EMAIL, payload: "Enter valid Email"}); }
      else if(!/^[a-zA-Z\s]*$/.test(newState.city)){ dispatch({type:ACTIONS.EVAL_CITY, payload: "Enter valid City"}); }
      else if(!/^[a-zA-Z\s]*$/.test(newState.stateName)){ dispatch({type:ACTIONS.EVAL_STATE_NAME, payload: "Enter valid State Name"}); }
      else if(!/^(\d){6}$/.test(newState.postal)){ dispatch({type:ACTIONS.EVAL_POSTAL, payload: "Enter valid Postal"}); }
      else {
        setShow(false);
      }
    }
  }
  

  return (
    <div className='outline'>
      <div className="container">
        {
          show? (
            <div>
              <header>Enter your Personal Details</header>
              <hr/>
              <div className='inner'>
                <h3 className='wrong-fields'>{newState.highlighter}</h3>
                <div className='fields'>
                  <label>First Name:</label>
                  <input 
                  placeholder='Enter First Name'
                  onChange={e => dispatch({type: ACTIONS.FIRST_NAME, payload: e})}
                  />
                </div>
                <div className='fields'>
                  <label>Last Name:</label>
                  <input 
                  placeholder='Enter Last Name'
                  onChange={e => dispatch({type: ACTIONS.LAST_NAME, payload: e})}
                  />
                </div>
                <div className='fields'>
                  <label>Phone</label>
                  <input 
                  onChange={e => dispatch({type: ACTIONS.PHONE, payload: e})}
                  />
                </div>
                <div className='fields'>
                  <label>Email</label>
                  <input 
                  placeholder='abc@gmail.com'
                  onChange={e => dispatch({type: ACTIONS.EMAIL, payload: e})}
                  />
                </div>
                <div className='fields'>
                  <label>Address</label>
                  <input
                  onChange={e => dispatch({type: ACTIONS.ADDRESS, payload: e})}
                  />
                </div>
                <div className='fields'>
                  <label>City</label>
                  <input
                  onChange={e => dispatch({type: ACTIONS.CITY, payload: e})}
                  />
                </div>
                <div className='fields'>
                  <label>State</label>
                  <input
                  onChange={e => dispatch({type: ACTIONS.STATE_NAME, payload: e})}
                  />
                </div>
                <div className='fields'>
                  <label>Postal</label>
                  <input
                  onChange={e => dispatch({type: ACTIONS.POSTAL, payload: e})}
                  />
                </div>          
              </div>
              <div className='submission'>
                <button onClick={Evaluate}>Submit</button>
              </div>
            </div>
          ) : <div>
            <header>FORM VALIDATION SUCCESSFUL</header>
          </div>
        } 
      </div>
    </div>
  );
}

export default App;