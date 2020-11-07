import React, { useState } from 'react';
import "./Form.module.css";

function Form(props) {

    //Usestate gives us both name and setname, here we destructure
    //name is set here to empty string
    const [name, setName] = useState('');

    function handleChange(e) {
        setName(e.target.value);
    }

    function handleSubmit(e) {
        e.preventDefault();
        if (name.length !== 0)
            props.addPrediction(name);
            setName("");
    }

    return (
        <form onSubmit={handleSubmit}>
        <h2 className="label">
          <label htmlFor="new-prediction-input" className="label__lg">
            Create a new prediction below
          </label>
        </h2>
        <input
          type="text"
          id="new-prediction-input"
          className="input input__lg"
          name="text"
          autoComplete="off"
          value={name}
          onChange={handleChange}
        />
        <button type="submit" className="btn btn__primary btn__lg">
          Add
        </button>
      </form>
    );
}

export default Form;