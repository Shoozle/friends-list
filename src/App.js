
import React, { useState, useEffect } from "react";
import Header from './components/Header';
import PredictionBlock from './components/PredictionBlock';

function App(props) {

  function getData() {
    fetch('https://glacial-castle-18259.herokuapp.com/')
    .then(res => res.json())
    .then(predictions => {
      predictions.forEach(prediction => {
        if (prediction.owner === "Chris") {
        setChrisData(chrisData.push(prediction));
        }
        if (prediction.owner === "Sean"){
          setSeanData(seanData.push(prediction));
        }
      });
    })
    .catch(err => console.log(err))
  }

  const [chrisData, setChrisData] = useState([])
  const [seanData, setSeanData] = useState([])
  const [userloggedin, setuserloggedin] = useState("Sean");
  
 
  getData();

  // const SEANDATA = [
  //   { id: "prediction-0", guess: "BloodbornEe 2 comes to PC", outcome: false },
  //   { id: "prediction-1", guess: "Monolith Soft finally show off new IP", outcome: false },
  //   { id: "prediction-2", guess: "The first racing game that doesn't suck in 10 years finally comes out and it's a Burnout game made by Criterion", outcome: false },
  // ];
  
  // const CCHRISDATA = [
  //   { id: "prediction-0", name: "Demon's Souls Remake gets 100 on metacritic", outcome: false },
  //   { id: "prediction-1", name: "The first racing game that doesn't suck in 10 years finally comes out and it's a Burnout game made by Criterion", outcome: false },
  // ];

    return (

      <div>
        <Header />
        <div className="Apparea">
          <PredictionBlock owner="Sean" name="Sean's Predictions" predictions={seanData}/>
          <PredictionBlock owner="Chris" name="Chris' predictions" predictions={chrisData} />
        </div>
      </div>
    );
  }

  export default App;
