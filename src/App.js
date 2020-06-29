import React from 'react';
import './App.scss';
import Dashboard from './dashboard';
import Dropdown from './dropdown';

function App() {
  return (
    <main className="container">
      <h1>Covid-19 Statistics</h1>
      <article className="world">
        <h2>Worldwide:</h2>
        <Dashboard />
      </article>
      <article className="country">
        <h2>Or by country:</h2>
        <div>
          <Dropdown />
          {/* <Dashboard/> */}
        </div>
      </article>
    </main>

  )
}

export default App;
