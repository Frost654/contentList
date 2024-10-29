import React from 'react';

const ContentItem = ({ item,searchTerm }) => {
    const fallbackImage="https://test.create.diagnal.com/images/placeholder_for_missing_posters.png"
  const imageUrl = `https://test.create.diagnal.com/images/${item["poster-image"]}`;
  const highlightText = (text, searchTerm) => {
    if (!searchTerm) return text; // Return the original text if there's no search term
  
    const regex = new RegExp(`(${searchTerm})`, 'gi'); // Create a case-insensitive regex for the search term
    const parts = text.split(regex); // Split the text by the search term
  
    return parts.map((part, index) => 
      part.toLowerCase() === searchTerm.toLowerCase() ? 
        <span key={index} className="highlight-text">{part}</span> : 
        part
    );
  };
  

  return (
    <div className="content-item">
      <img src={imageUrl} alt={item.name} className="content-image"  onError={(e) => { e.target.src = fallbackImage }} />
      <p className="content-title">
      {highlightText(item.name, searchTerm)}
</p>
    </div>
  );
};

export default ContentItem;
