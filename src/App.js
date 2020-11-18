
import React from "react";
import Header from './components/Header';
import PredictionBlock from './components/PredictionBlock';

const CHRISDATA = [];

function App(props) {

  async function getData() {
    console.log('function call');
    fetch('https://glacial-castle-18259.herokuapp.com/')
    .then(res => res.json())
    .then(predictions => {
      predictions.forEach(prediction => {
        CHRISDATA.push(prediction);
        console.log(CHRISDATA);
      });
    })
    .catch(err => console.log(err))
  }

  getData();

  

  const SEANDATA = [
    { id: "prediction-0", guess: "Bloodborne 2 comes to PC", outcome: false },
    { id: "prediction-1", guess: "Monolith Soft finally show off new IP", outcome: false },
    { id: "prediction-2", guess: "The first racing game that doesn't suck in 10 years finally comes out and it's a Burnout game made by Criterion", outcome: false },
  ];
  
  // const CCHRISDATA = [
  //   { id: "prediction-0", name: "Demon's Souls Remake gets 100 on metacritic", outcome: false },
  //   { id: "prediction-1", name: "The first racing game that doesn't suck in 10 years finally comes out and it's a Burnout game made by Criterion", outcome: false },
  // ];

    return (

      <div>
        <Header />
        <div className="Apparea">
          <PredictionBlock name="Sean's Predictions" predictions={SEANDATA}/>
          <PredictionBlock name="Chris' Predictions" predictions={CHRISDATA} />
        </div>
      </div>
    );
  }

  export default App;
