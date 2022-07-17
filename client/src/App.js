import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Main from './views/Main';
import Detail from  './views/Detail';
import Update from './views/Update';

function App() {
  return (
    <Router>
    <div className="App">
      <h1>FAVORITE AUTHORS</h1>
      <Routes>
        <Route path="/" element={ <Main /> }/>
        <Route path="/authors/:id" element={ <Detail /> } />
        <Route path="/authors/:id/edit" element={ <Update /> } />
      </Routes>

    </div>
    </Router>
  );
}

export default App;
