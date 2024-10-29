import React,{useState} from 'react';
const Header = ({ searchTerm, onSearchChange }) => {
    const[visibleInput,setVisibleInput]=useState(false);
    return (
  <div className="header">
   {visibleInput && <button className="icon-button" onClick={()=>{
    setVisibleInput(false);
    onSearchChange("");
    }}>←</button>
}
    <h1 className="title">Romantic Comedy</h1>
   { visibleInput && <input 
      type="text" 
      className="search-input" 
      placeholder="Search..." 
      value={searchTerm} 
      onChange={(e) => onSearchChange(e.target.value)}
    />
}
    <button className="icon-button search-icon" onClick={()=>{
    setVisibleInput(true);
    }}>🔍</button>
  </div>
);
}

export default Header;
