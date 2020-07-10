import React from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faSpinner, faVirus, faHandsWash, faHeadSideMask, faHouseUser, faVolumeUp, faVolumeMute } from '@fortawesome/free-solid-svg-icons';

import Header from './Header';
import Dashboard from './Dashboard';
import SearchArea from './Search';
import Toast from './Toast';

import './App.scss';

library.add(faSpinner, faVirus, faHandsWash, faHeadSideMask, faHouseUser, faVolumeUp, faVolumeMute);

function App() {
  return (
    <div className="container">
      <Header />
      <main className="content-wrapper">
        <article className="data-area">
          <h2 className="txt-topic-local">Worldwide:</h2>
          <Dashboard />
        </article>
        <article className="data-area">
          <h2 className="txt-topic-local">Or by country:</h2>
          <SearchArea />
        </article>
      </main>
      <Toast />
    </div>
  )
}

export default App;
