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
        <div className="bg-video">
          <iframe className="video" width="560" height="315" src="https://www.youtube.com/embed/3tBk7ONm95Q" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
        {/* Replacekeywords by iconfont */}
      </header>
      <article className="data-area world">
        <h2 className="txt-topic-local">Worldwide:</h2>
        <Dashboard />
      </article>
      <article className="data-area country">
        <h2 className="txt-topic-local">Or by country:</h2>
        <SearchArea />
      </article>
    </main>

  )
}

export default App;
