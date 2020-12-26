import React, { useState } from 'react';
import './prediction.css';
import './button.css';

export default function Prediction(props) {

  const [isEditing, setEditing] = useState(false);
  const [newGuess, setnewGuess] = useState(props.guess);
  
  function handleChange(e) {
    setnewGuess(e.target.value)
    console.log(e.key, e.charCode);
    if (e.key === 'Enter' || e.code === 'Enter') {
      handleSubmit(e);
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    props.editPrediction(props.id, newGuess);
    setnewGuess(newGuess);
    setEditing(false)

  }

  const editingTemplate = (
    
    <form className="stack-small" onSubmit={handleSubmit}>
      <div className="form-group">
        <textarea
          id={props.id} 
          className="text form__input--editing" 
          type="text" 
          onChange={handleChange}
          placeholder={props.guess}
          required
          autoComplete="off"
          maxLength="120"
          rows="4"
          value={newGuess}
        />
      </div>
      <div className="btn-group">
        <button type="button" className="btn cancel" onClick={() => setEditing(false)}>
          Cancel
        </button>
        <button type="submit" className="btn btn__primary edit">
          Save
        </button>
      </div>
    </form>
  );
  const viewTemplate = (
    <div>
      <div>
        <label htmlFor={props.id}>
        <p className="prediction__text"> {props.guess} </p>
        </label>
        <input
          className="prediction__checkbox"
          id={props.id}
          type="checkbox"
          defaultChecked={props.outcome}
          onChange={() => props.togglePredictionOutcome(props.id, props.outcome)}
        />
      </div>
      <div >
        <button type="button" className="btn"  onClick={() => setEditing(true)} disabled={props.commited}>
          Edit 
        </button>
        <button
          className="btn"
          type="button"
          onClick={() => props.deletePrediction(props.id)}
          disabled={props.commited}
        >
          Delete
        </button>
        <button
          className="btn"
          type="button"
          onClick={() => props.commitPrediction(props.id)}
          disabled={props.commited}
        >
          Commit
        </button>
      </div>
    </div>
  );

  //Always runs after a component is rendered
  //If editing, focus on the current ref text box or edit button

  return (
    <li className="prediction__item">
      {isEditing ? editingTemplate : viewTemplate}
    </li>
  );
}