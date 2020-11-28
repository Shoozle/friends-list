
import React, { useState, useEffect } from "react";
import Header from './components/Header';
import Navigation from './components/Navigation';
import PredictionBlock from './components/PredictionBlock';

function App(props) {

  const [chrisData, setChrisData] = useState([]);
  const [seanData, setSeanData] = useState([]);
  const [loginpage, setloginpage] = useState(false);

  const [user, setUser] = useState(
    {
      name: "Sean",
      loggedin: true,
    }
  )

  function signout() {
    setUser({
      name: "",
      loggedin: false
    })
  }

  function getData() {
    fetch('http://localhost:3000/')
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

  function setpage(page) {
    setloginpage(true)
  }
 
  getData();

    return (

      <div>
        <Navigation signout={signout} username={user.name} issignedin={user.loggedin} showlogin={setpage}/>
        <Header />
        <div className="Apparea">
          <PredictionBlock owner="Sean" name="Sean's Predictions" predictions={seanData}/>
          <PredictionBlock owner="Chris" name="Chris' predictions" predictions={chrisData} />
        </div>
      </div>
    );
  }

  export default App;
