import React, { useState } from 'react';
import Header from './components/Header';
import ContentGrid from './components/ContentGrid';
import './App.css';

const App = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [items, setItems] = useState([]);
  const [filteredItems,setFilteredItems]=useState([]);

  return (
    <div>
      <Header searchTerm={searchTerm} onSearchChange={setSearchTerm}  items={items} filteredItems={filteredItems} />
      <ContentGrid searchTerm={searchTerm}  items={items} setItems={setItems} filteredItems={filteredItems} setFilteredItems={setFilteredItems}  />
    </div>
  );
};

export default App;
