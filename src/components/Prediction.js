import React from 'react';

function Prediction(props) {
  return (
    <div>
      <label>{props.guess}</label>
      <input type="Checkbox" onClick={(id) => {props.changeOutcome(props.id)}} checked={props.outcome}></input>
      <input type="Checkbox" checked={props.commited}></input>
      <p>{props.id}</p>
    </div>
  )
}

export default Prediction;