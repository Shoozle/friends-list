import React, { useState } from 'react';
import "./form.css";

function Form(props) {

    //Usestate gives us both name and setname, here we destructure
    //name is set here to empty string
    const [guess, setGuess] = useState('');
    const [id, setId] = useState();

    function handleChange(e) {
      setGuess(e.target.value);
    }

    function handleSubmit(e) {
        e.preventDefault();
        if (guess.length !== 0) {
            fetch('http://localhost:3000/addguess', {
              method: 'post',
              headers: {'Accept': 'application/json', 'Content-Type': 'application/json'},
              body: JSON.stringify({
                id: props.newid,
                guess: guess,
                owner: props.guessOwner,
                outcome: false
              })
            })
            .catch(err => console.log(err))
          }
        props.addPrediction(guess);
        setGuess('');
        }
        

    return (
        <form className="form" onSubmit={handleSubmit}>
        <input
          className="form__input"
          type="text"
          guess="text"
          autoComplete="off"
          value={guess}
          onChange={handleChange}
          placeholder="Create a new prediction"
        />
        {/* <button className="btn form__button" type="submit">
          Add
        </button> */}
      </form>
    );
}

export default Form;