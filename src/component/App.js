import React from 'react';

import Header from './Header';
import Dashboard from './Dashboard';
import SearchArea from './Search';

import './App.scss';

function App() {
  return (
    <main className="container">
      <Header />
      <article className="data-area">
        <h2 className="txt-topic-local">Worldwide:</h2>
        <Dashboard />
      </article>
      <article className="data-area">
        <h2 className="txt-topic-local">Or by country:</h2>
        <SearchArea />
      </article>
    </main>
  )
}

export default App;

// res.map issue
