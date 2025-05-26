import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';

// ReactDOM.render is used to render a React element into the DOM in the supplied container.
// In this case, it's rendering the main App component (wrapped in React.StrictMode for highlighting potential problems)
// into the DOM element with the id 'root'.
ReactDOM.render(
  <React.StrictMode>
    <div>
      <h1>Basic page with React + TS + ESLint + Prettier + Tailwind</h1>
    </div>
  </React.StrictMode>,
  document.getElementById('root'),
);

// reportWebVitals is a function that can be used to measure the performance of your app.
// It can log results to the console or send them to an analytics endpoint.
// Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
