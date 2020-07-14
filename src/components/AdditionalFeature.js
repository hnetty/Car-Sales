import React, { useReducer } from 'react';

import { reducer, initialState } from '../reducers/reducers'

const AdditionalFeature = props => {

  const [state, dispatch] = useReducer(reducer, initialState)

  const addFeature = e => {
    dispatch({type: "ADD_FEATURE", payload:props.feature})
  }


  return (
    <li>
      {/* Add an onClick that will let you add a feature to your car */}
      <button className="button" onClick={addFeature}>Add</button>
      {props.feature.name} (+{props.feature.price})
    </li>
  );
};

export default AdditionalFeature;
