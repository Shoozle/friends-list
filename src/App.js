
import React from "react";
import Header from './components/Header';
import PredictionBlock from './components/PredictionBlock';

const SEANDATA = [
  { id: "prediction-0", name: "Bloodborne 2 comes to PC", outcome: false },
  { id: "prediction-1", name: "Monolith Soft finally show off new IP", outcome: false },
  { id: "prediction-2", name: "The first racing game that doesn't suck in 10 years finally comes out and it's a Burnout game made by Criterion", outcome: false },
];

const CHRISDATA = [
  { id: "prediction-0", name: "Demon's Souls Remake gets 100 on metacritic", outcome: false },
  { id: "prediction-1", name: "The first racing game that doesn't suck in 10 years finally comes out and it's a Burnout game made by Criterion", outcome: false },
];

function App(props) {

  return (
    <div>
      <Header/>
      <div className="Apparea">
        <PredictionBlock name="Sean's Predictions" predictions={SEANDATA}/>
        <PredictionBlock name="Chris' Predictions" predictions={CHRISDATA}/>
      </div>
    </div>
  );
}

export default App;
