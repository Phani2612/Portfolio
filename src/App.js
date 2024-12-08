import React from 'react';
import './App.css';
import Sidebar from './components/Sidebar';
import Dasboard from './components/Dasboard';

function App() {
  return (
    <div className="App">
      <div className="app-container">
        <Sidebar />
        <div className="content">
          <Dasboard />
        </div>
      </div>
    </div>
  );
}

export default App;
