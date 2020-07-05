import React from 'react';
import './App.scss';
import Dashboard from './dashboard';
import SearchArea from './dropdown';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faVirus, faHandsWash, faHeadSideMask, faHouseUser } from '@fortawesome/free-solid-svg-icons';

function App() {
  return (
    <main className="container">
      <header className="header">
        <h1 className="txt-jumbo">C<FontAwesomeIcon icon={faVirus} />vid-19</h1>
        <div className="txt-subjumbo triangle-area">
          <p className="triangles">
            <span className="triangle">Wash <FontAwesomeIcon icon={faHandsWash} /></span>
            <span className="triangle">Wear <FontAwesomeIcon icon={faHeadSideMask} /></span>
            <span className="triangle">Stay <FontAwesomeIcon icon={faHouseUser} /></span>
          </p>
        </div>
        <div className="bg-video">
          <iframe className="video" width="560" height="315" src="https://www.youtube.com/embed/3tBk7ONm95Q" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
        </div>
      </header>
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

// Offline solution
