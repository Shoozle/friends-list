import React, { useState } from "react";
import Prediction from "./Prediction";
import Form from "./Form";
import FilterButton from "./FilterButton";
import './predictionBlock.css';


//Goes outside app as this doesn't change when App gets updated
const FILTER_MAP = {
  All: () => true,
  Correct: prediction => prediction.outcome,
  Incorrect: prediction => !prediction.outcome
};

//Can now refer to filter names to run the associated function of that object which is listed above
const FILTER_NAMES = Object.keys(FILTER_MAP);

function PredictionBlock(props) {

  //Default state is to show ALL the predictions
  const [filter, setFilter] = useState('All');
  const [id, setId] = useState(0);
  const [predictions, setPredictions] = useState(props.predictions);


  //STATE IS ASYNCHRONOUS, SO IT WILL NOT ALWAYS BE REFLECTIVE
  function currentid() {
    maxId();
    return id;
  }

  function addid() {
    setId(() => {
      return id+1
    });
  }
  
  function maxId() {
    fetch('https://glacial-castle-18259.herokuapp.com/returnid')
        .then(res => res.json())
        .then(data =>  { 
          setId(data[0].max)
        })
        .catch(err => console.log(err))
  }

  function addPrediction(guess) {
    //addid is called prior to this function call so id is already added
    const newprediction = {
      id: id+1,
      guess: guess,
      outcome: false,
      commited: false,
    };
    //Set the state of predictions to old predictions pushing new prediction at the end
    setPredictions([...predictions, newprediction]);
  }

  function togglePredictionOutcome(id, outcome) {
    const updatedPredictions = predictions.map(prediction => {
      if (id === prediction.id) {
        fetch('https://glacial-castle-18259.herokuapp.com/editoutcome', {
          method: 'post',
          headers: {'Accept': 'application/json', 'Content-Type': 'application/json'},
          body: JSON.stringify({
            id: id,
            outcome: outcome
          })
        })
        .then()
        .catch(err => console.log(err))
        return { ...prediction, outcome: !prediction.outcome }
      }
      return prediction;
    });
    setPredictions(updatedPredictions);
  }

  function deletePrediction(id) {
    console.log(id);
    fetch('https://glacial-castle-18259.herokuapp.com/delete', {
      method: 'post',
      headers: {'Accept': 'application/json', 'Content-Type': 'application/json'},
      body: JSON.stringify({
        id: id
      })
    })
      .then()
      .catch(err => console.log(err))
    const remainingpredictions = predictions.filter(prediction => id !== prediction.id);
    setPredictions(remainingpredictions);
  }

  function editPrediction(id, newGuess) {
    const editedpredictionList = predictions.map(prediction => {
      if (id === prediction.id) {
        return { ...prediction, guess: newGuess }
      }
      return prediction;
    });
    fetch('https://glacial-castle-18259.herokuapp.com/editguess', {
      method: 'post',
      headers: {'Accept': 'application/json', 'Content-Type': 'application/json'},
      body: JSON.stringify({
        id: id,
        guess: newGuess
      })
    })
    .then()
    .catch(err => console.log(err))
    setPredictions(editedpredictionList);
  }

  function commitPrediction(id) {
    const commitedPredictionList = predictions.map(prediction => {
      if (id === prediction.id) {
        return { ...prediction, commited: true}
      }
      return prediction;
    })
    setPredictions(commitedPredictionList)
  }

  const predictionList = predictions
    .filter(FILTER_MAP[filter])
    .map(prediction => (
      <Prediction
        id={prediction.id}
        guess={prediction.guess}
        outcome={prediction.outcome}
        commited={prediction.commited}
        key={prediction.id}
        togglePredictionOutcome={togglePredictionOutcome}
        deletePrediction={deletePrediction}
        editPrediction={editPrediction}
        commitPrediction={commitPrediction}
      />
    ));

  const filterList = FILTER_NAMES.map(name => (
    <FilterButton
      key={name}
      guess={name}
      isPressed={name === filter}
      setFilter={setFilter}
    />
  ));

  maxId();

  return (
    <div className="prediction__block">
      <h1 className="prediction__heading">{props.name}</h1>
      <div className="prediction__filters">
        {filterList}
      </div>
      <ul className="prediction__list"
        aria-labelledby="list-heading">
        {predictionList}
      </ul>
      <Form
        guessOwner={props.owner}
        addPrediction={addPrediction}
        getid={currentid}
        addid={addid}
      />
    </div>
  );
}

export default PredictionBlock;
