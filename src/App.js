import React, { useState } from 'react';
import Header from './components/Header';
import ContentGrid from './components/ContentGrid';
import './App.css';

const App = () => {
  const [searchTerm, setSearchTerm] = useState('');
  

  return (
    <div>
      <Header searchTerm={searchTerm} onSearchChange={setSearchTerm}  />
      <ContentGrid searchTerm={searchTerm} />
    </div>
  );
};

export default App;
