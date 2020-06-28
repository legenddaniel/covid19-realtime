import React from 'react';
import './App.scss';
import Dashboard from './dashboard';

function App() {
  return (
    <article className="container">
      <h1>Covid-19 Statistics</h1>
      <Dashboard />
      <div>
        <input className="comp" />
        <button className="comp">Search</button></div>
    </article>

  )
}

export default App;
