import React from 'react';

import Header from './header';
import Dashboard from './dashboard';
import SearchArea from './search';

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
