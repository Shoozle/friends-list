import React, { useEffect, useRef, useState } from 'react';

export default function Prediction(props) {

  const [isEditing, setEditing] = useState(false);
  const [newName, setNewName] = useState('');

  const editFieldRef = useRef(null);
  const editButtonRef = useRef(null);

  //Stores previous editing value so we can see what we were last doing
  const wasEditing = usePrevious(isEditing);

  //Update either past isediting false or true
  function usePrevious(value) {
    const ref = useRef();
    useEffect(() => {
      ref.current = value;
    });
    return ref.current;
  }


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
        <label className="label" htmlFor={props.id}>
          New name for {props.name}
        </label>
        <input 
          id={props.id} 
          className="text" 
          type="text" 
          value={newName} 
          onChange={handleChange}
          ref={editFieldRef}
        />
      </div>
      <div className="btn-group">
        <button type="button" className="btn cancel" onClick={() => setEditing(false)}>
          Cancel
            <span className="visually-hidden">renaming {props.name}</span>
        </button>
        <button type="submit" className="btn btn__primary edit">
          Save
            <span className="visually-hidden">new name for {props.name}</span>
        </button>
      </div>
    </form>
  );
  const viewTemplate = (
    <div>
      <div>
        <input
          id={props.id}
          type="checkbox"
          defaultChecked={props.outcome}
          onChange={() => props.togglePredictionOutcome(props.id)}
        />
        <label htmlFor={props.id}>
          {props.name}
        </label>
      </div>
      <div >
        <button type="button"  onClick={() => setEditing(true)} ref={editButtonRef}>
          Edit 
        </button>
        <button
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
  useEffect(() => {
    if (!wasEditing && isEditing) {
      editFieldRef.current.focus();
    }
    if (wasEditing && !isEditing) {
      editButtonRef.current.focus();
    }
  }, [wasEditing, isEditing]);

  return (
    <li>
      {isEditing ? editingTemplate : viewTemplate}
    </li>
  );
}