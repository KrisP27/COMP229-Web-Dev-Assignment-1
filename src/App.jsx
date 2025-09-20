//App.jsx
//Kristopher Prince 301462555
//September 19th 2025

import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import MainRouter from './MainRouter.jsx';

//Returns MainRouter code
const App = () => {
  return (
    <Router>
      <MainRouter />
    </Router>
  );
};

export default App;
