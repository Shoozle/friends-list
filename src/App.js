import React, { useState } from "react";
import Prediction from "./components/Prediction";
import Form from "./components/Form";
import FilterButton from "./components/FilterButton";
import { nanoid } from "nanoid";
import './app.css';


//Goes outside app as this doesn't change when App gets updated
const FILTER_MAP = {
  All: () => true,
  Correct: prediction => prediction.outcome,
  Incorrect: prediction => !prediction.outcome
};

//Can now refer to filter names to run the associated function of that object which is listed above
const FILTER_NAMES = Object.keys(FILTER_MAP);

function App(props) {

  //Default state is to show ALL the predictions
  const [filter, setFilter] = useState('All');

  //Nanoid attaches unique id based on previous react objects
  function addPrediction(name) {
    const newprediction = {
      id: "prediction=" + nanoid(),
      name: name,
      outcome: false
    };
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
    console.log(id);
    const remainingpredictions = predictions.filter(prediction => id !== prediction.id);
    setPredictions(remainingpredictions);
  }

  function editPrediction(id, newName) {
    const editedpredictionList = predictions.map(prediction => {
      if (id === prediction.id) {
        return { ...prediction, name: newName }
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
        name={prediction.name}
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
      name={name}
      isPressed={name === filter}
      setFilter={setFilter}
    />
  ));

  return (
    <div className="prediction">
      <h1>{props.name}</h1>

      <div >
        {filterList}
      </div>
      <ul
        aria-labelledby="list-heading">
        {predictionList}
      </ul>
      <Form
        addPrediction={addPrediction}
      />
    </div>
  );
}

export default App;
