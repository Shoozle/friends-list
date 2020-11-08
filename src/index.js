import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';

const DATA = [
  { id: "todo-0", name: "Eat", completed: false },
  { id: "todo-1", name: "Sleep", completed: false },
  { id: "todo-2", name: "Repeat", completed: false }
];

const SEANDATA = [
  { id: "prediction-0", name: "Bloodborne 2 comes to PC", outcome: false },
  { id: "prediction-1", name: "Monolith Soft finally show off new IP", outcome: false },
];

const CHRISDATA = [
  { id: "prediction-0", name: "Demon's Souls Remake gets 100 on metacritic", outcome: false },
  { id: "prediction-1", name: "The first racing game that doesn't suck in 10 years finally comes out", outcome: false },
];


ReactDOM.render(
  <React.StrictMode>
    <App name="Sean's Predictions" predictions={SEANDATA}/>
    <App name="Chris' Predictions" predictions={CHRISDATA}/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
