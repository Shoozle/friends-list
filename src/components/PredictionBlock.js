import React, { useState } from "react";
import Prediction from "./Prediction";
import Form from "./Form";
import FilterButton from "./FilterButton";
import { nanoid } from "nanoid";
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

  //Nanoid attaches unique id based on previous react objects
  function addPrediction(guess) {
    const newprediction = {
      id: "prediction=" + nanoid(),
      guess: guess,
      outcome: false
    };
    //Set the state of predictions to old predictions pushing new prediction at the end
    setPredictions([...predictions, newprediction]);
  }

  function togglePredictionOutcome(id) {
    const updatedPredictions = predictions.map(prediction => {
      if (id === prediction.id) {
        return { ...prediction, outcome: !prediction.outcome }
      }
      return prediction;
    });
    setPredictions(updatedPredictions);
  }

  function deletePrediction(id) {
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
    setPredictions(editedpredictionList);
  }

  const [predictions, setPredictions] = useState(props.predictions);

  const predictionList = predictions
    .filter(FILTER_MAP[filter])
    .map(prediction => (
      <Prediction
        id={prediction.id}
        guess={prediction.guess}
        outcome={prediction.outcome}
        key={prediction.id}
        togglePredictionOutcome={togglePredictionOutcome}
        deletePrediction={deletePrediction}
        editPrediction={editPrediction}
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
        addPrediction={addPrediction}
      />
    </div>
  );
}

export default PredictionBlock;
