
import React, { Component } from "react";
import Header from './components/Header';
import PredictionBlock from './components/PredictionBlock';

class App extends Component {
  state = {
    chrisData: {
      owner: "Chris",
      predictions: [
        {
          id: 0,
          guess: "I was able to justify my PS5 purchase",
          commited: false,
          outcome: false
        }
        // {
        //   id: 1,
        //   guess: "Need for Speed is an excellent Burnout game",
        //   commited: true,
        //   outcome: true
        // }
      ]
    },
    seanData: {
      owner: "Sean",
      predictions: [
        {
          id: 2,
          guess: "Elden Ring is a 10",
          commited: true,
          outcome: true
        }
        
        // {
        //   id: 3,
        //   guess: "Bloodborne comes to PC at last",
        //   commited: true,
        //   outcome: false
        // },
        // {
        //   id: 4,
        //   guess: "All Yakuza games finally on PC",
        //   commited: true,
        //   outcome: true
        // }
      ]
    }
  }


  //Loop through all objects within objects inside state
  changeOutcomeHandler = (id) => {
    Object.entries(this.state).forEach(entry1 => {
      const [key, value] = entry1;
      let data = key;
      for (let i=0; i<value.predictions.length; i++) {
        Object.entries(value.predictions[i]).forEach(entry2 => {
          const [key, value] = entry2;
          console.log(entry2);
          if (value === id) {
            let newState = !value.outcome;
            this.setState((state) => {
              //console.log(key, value)
              //return { state[data].predictions[index].outcome : newState };
            });
          }
        })
      }
    })
  }

  render = () => {
    let predictionBlocks = [];

    Object.entries(this.state).forEach((entry, index) => {
      const [key, value] = entry;
      predictionBlocks.push(
        <PredictionBlock
          key={index}
          owner={value.owner}
          predictions={value.predictions}
          changeOutcome={(id) => this.changeOutcomeHandler(id)}
        />)
    })

    return (

      <div>
        <Header />
        {predictionBlocks}
      </div>
    );
  }
}

export default App;
