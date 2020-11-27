import React, { useState } from 'react';
import './prediction.css';
import './button.css';

export default function Prediction(props) {

  const [isEditing, setEditing] = useState(false);
  const [newGuess, setnewGuess] = useState('');

  function handleChange(e) {
    setnewGuess(e.target.value)
  }

  function handleSubmit(e) {
    e.preventDefault();
    props.editPrediction(props.id, newGuess);
    setnewGuess("")
    setEditing(false)
  }

  const editingTemplate = (
    <form className="stack-small" onSubmit={handleSubmit}>
      <div className="form-group">
        <input 
          id={props.id} 
          className="text form__input" 
          type="text" 
          value={newGuess} 
          onChange={handleChange}
          placeholder={props.guess}
          required
          autoComplete="off"
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
        <button type="button" className="btn"  onClick={() => setEditing(true)}>
          Edit 
        </button>
        <button
          className="btn"
          type="button"
          onClick={() => props.deletePrediction(props.id)}
        >
          Delete
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