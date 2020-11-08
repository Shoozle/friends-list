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
        <h2 >
          <label htmlFor="new-prediction-input">
            Create a new prediction below
          </label>
        </h2>
        <input
          type="text"
          name="text"
          autoComplete="off"
          value={name}
          onChange={handleChange}
        />
        <button type="submit">
          Add
        </button>
      </form>
    );
}

export default Form;