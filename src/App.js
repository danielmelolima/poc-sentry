import React from 'react';
import './App.css';
import * as Sentry from '@sentry/react';

Sentry.init({dsn: "https://a294664c9030479390604f7e1ec41558@o435721.ingest.sentry.io/5395524"});

function App() {
  return (
    <button onClick={() => Sentry.captureMessage('Clicou no botão')}>Break the world</button>
  );
}

export default App;
