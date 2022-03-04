import React from 'react';
import './App.css';
import Feed from './Feed';
import Header from './Header.js';
import Sidebar from './Sidebar';

function App() {
  return (
    <div className="app">


      {/* Header */}
      <Header />
      {/* App Body */}
      <div className="app_body">
        {/* SideBar */}
        <Sidebar />
        {/* Feed */}
        <Feed />
      </div>


      {/* Widgets */}



    </div>
  );
}

export default App;
