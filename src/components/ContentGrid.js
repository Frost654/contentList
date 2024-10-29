import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ContentItem from './ContentItem';

const ContentGrid = ({ searchTerm }) => {
  const [items, setItems] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    const loadItems = async () => {
      try {
        const response = await axios.get(`https://test.create.diagnal.com/data/page${page}.json`);
        const contentItems = response.data?.page['content-items'].content;
        setItems((prevItems) => [...prevItems, ...contentItems]);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    loadItems();
  }, [page]);

  const handleScroll = () => {
    if (window.innerHeight + document.documentElement.scrollTop + 1 >= document.documentElement.scrollHeight) {
      setPage((prevPage) => prevPage + 1);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const filteredItems = items.filter(item =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="content-grid">
      {filteredItems.map((item, index) => (
       <ContentItem
       key={index}
       item={item}
       searchTerm={searchTerm}
     /> 
      ))}
    </div>
  );
};

export default ContentGrid;
