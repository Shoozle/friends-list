import React, { useState } from 'react';
import "./form.css";

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
        <form className="form" onSubmit={handleSubmit}>
        <input
          className="form__input"
          type="text"
          name="text"
          autoComplete="off"
          value={name}
          onChange={handleChange}
          placeholder="Create a new prediction"
        />
        <button className="btn form__button" type="submit">
          Add
        </button>
      </form>
    );
}

export default Form;