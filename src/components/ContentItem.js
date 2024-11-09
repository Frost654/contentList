import React from 'react';
import { fallbackImage, imageUrlCard } from './config/constants';

const ContentItem = React.memo(({ item, searchTerm }) => {
  const imageUrl = `${imageUrlCard}${item["poster-image"]}`;

  // Highlight search term in item name
  const highlightText = (text, searchTerm) => {
    if (!searchTerm) return text;

    const regex = new RegExp(`(${searchTerm})`, 'gi');
    const parts = text.split(regex);

    return parts.map((part, index) =>
      part.toLowerCase() === searchTerm.toLowerCase() ? (
        <span key={index} className="highlight-text">{part}</span>
      ) : (
        part
      )
    );
  };

  return (
    <div className="content-item">
      <img
        src={imageUrl}
        alt={item.name}
        className="content-image"
        onError={(e) => { e.target.src = fallbackImage; }}
      />
      <p className="content-title" title={item.name}>
        {highlightText(item.name, searchTerm)}
      </p>
    </div>
  );
});

export default ContentItem;
