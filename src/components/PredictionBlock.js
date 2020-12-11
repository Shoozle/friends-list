import React from 'react'
import Prediction from './Prediction';

function PredictionBlock(props) {

  let predictions = props.predictions.map((prediction, index) => {
    return (
      <Prediction 
      key={index}
      id={prediction.id}
      guess={prediction.guess}
      commited={prediction.commited}
      outcome={prediction.outcome}
      changeOutcome={(id) => props.changeOutcome(id)}
      />
    )
  })

  return (
    <div>
      <h1>{props.owner}</h1>
      <ul>
        {predictions}
      </ul>
    </div>
  )
}

export default PredictionBlock;