import React from 'react';
import './App.css';
import * as Sentry from '@sentry/react';

Sentry.init({dsn: "https://a294664c9030479390604f7e1ec41558@o435721.ingest.sentry.io/5395524"});

const p = {};

function App() {
  return (
    <button onClick={() => p.methodDoesNotExist()}>Botão Quebrado</button>
  );
}

export default App;
