import './App.css';
import React from 'react';
import { Register } from './components/Register';
import { Login } from './components/Login';
import StatusEkle from './components/Status/StatusEkle'

function App() {
  return (
    <main className="App">

      <Login /> 
      {/* <Register /> */}
      {/* <StatusEkle /> */}
    
    </main>
  );
}

export default App;
