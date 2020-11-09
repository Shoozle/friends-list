import React, { useState } from 'react';
import './prediction.css';
import './button.css';

export default function Prediction(props) {

  const [isEditing, setEditing] = useState(false);
  const [newName, setNewName] = useState('');



  //Stores previous editing value so we can see what we were last doing


  //Update either past isediting false or true


  function handleChange(e) {
    setNewName(e.target.value)
  }

  function handleSubmit(e) {
    e.preventDefault();
    props.editPrediction(props.id, newName);
    setNewName("")
    setEditing(false)
  }

  const editingTemplate = (
    <form className="stack-small" onSubmit={handleSubmit}>
      <div className="form-group">
        <input 
          id={props.id} 
          className="text" 
          type="text" 
          value={newName} 
          onChange={handleChange}
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
        <p className="prediction__text"> {props.name} </p>
        </label>
        <input
          className="prediction__checkbox"
          id={props.id}
          type="checkbox"
          defaultChecked={props.outcome}
          onChange={() => props.togglePredictionOutcome(props.id)}
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