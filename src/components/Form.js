import React, { useState } from 'react';
import "./form.css";

function Form(props) {

    //Usestate gives us both name and setname, here we destructure
    //name is set here to empty string
    const [guess, setGuess] = useState('');
    const [id, setid] = useState(0);


    function handleChange(e) {
      setGuess(e.target.value);
      console.log(`Max id is ${props.getid()} and we are adding + 1 when submitting`);
    }

    function handleSubmit(e) {
        let newid = props.getid();
        setid(newid + 1)
        e.preventDefault();
        if (guess.length !== 0) {
            fetch('http://localhost:3000/addguess', {
              method: 'post',
              headers: {'Accept': 'application/json', 'Content-Type': 'application/json'},
              body: JSON.stringify({
                id: newid,
                guess: guess,
                owner: props.guessOwner,
                outcome: false
              })
            })
            .then(
              props.addid()
            )
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