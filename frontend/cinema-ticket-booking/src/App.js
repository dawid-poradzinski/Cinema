import { useState, useEffect } from 'react';
import axios from 'axios';
import { Outlet } from "react-router-dom";

import Header from './components/Header';

function App() {
  return (
    <div className="App">
      <Header/>
      <div className="Main">
      <Outlet />
      </div>
    </div>
  );
}

export default App;
