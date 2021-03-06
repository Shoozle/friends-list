import React, { useState } from 'react';
import "./form.css";

function Form(props) {

    //Usestate gives us both name and setname, here we destructure
    //name is set here to empty string
    const [guess, setGuess] = useState('');
    const [id, setid] = useState(0);

    function handleChange(e) {
      setGuess(e.target.value);
      setid(props.getid);
    }

    function handleSubmit(e) {
        let newid = props.getid();
        setid(newid + 1)
        e.preventDefault();
        if (guess.length !== 0) {
            fetch('https://glacial-castle-18259.herokuapp.com/addguess', {
              method: 'post',
              headers: {'Accept': 'application/json', 'Content-Type': 'application/json'},
              body: JSON.stringify({
                id: newid + 1,
                guess: guess,
                owner: props.guessOwner,
                outcome: false,
                committed: false
              })
            })
            .then()
            .catch(err => console.log(err))
            props.addid();
            props.addPrediction(guess);
            setGuess('');
          }
        }
        

    return (
        <form className="form" onSubmit={handleSubmit}>
        <textarea
          className="form__input"
          type="text"
          guess="text"
          autoComplete="off"
          value={guess}
          onChange={handleChange}
          placeholder="Create a new prediction"
          maxLength="120"
          rows="4"
        />
        <button className="btn form__button" type="submit">
          Add
        </button>
      </form>
    );
}

export default Form;