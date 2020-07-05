import React from 'react';
import ReactPlayer from 'react-player/youtube';
import Dashboard from './dashboard';
import SearchArea from './dropdown';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faVirus, faHandsWash, faHeadSideMask, faHouseUser } from '@fortawesome/free-solid-svg-icons';
import './App.scss';

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
          <ReactPlayer
            url="https://www.youtube.com/embed/3tBk7ONm95Q"
            width="100%"
            height="100%"
            playing
            loop
            controls={false}
            muted
          />
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
// res.map issue
