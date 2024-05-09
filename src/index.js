import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import MovieDetail from './MovieDetail';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
    <Routes>
      <Route path='/' Component={App}/>
      <Route path='/:id' Component={MovieDetail}/>
    </Routes>
  </Router>
);
