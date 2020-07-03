import React from 'react';
import './App.scss';
import Dashboard from './dashboard';
import SearchArea from './dropdown';

function App() {
  return (
    <main className="container">
      <header className="header">
        <h1 className="txt-jumbo">Covid-19 Statistics</h1>
        <h2 className="txt-subjumbo">Wash Hands, Wear Mask, Stay Home</h2>
        {/* Replacekeywords by iconfont */}
      </header>
      <article className="world">
        <h2>Worldwide:</h2>
        <Dashboard />
      </article>
      <article className="country">
        <h2>Or by country:</h2>
        <SearchArea />
      </article>
    </main>

  )
}

export default App;
