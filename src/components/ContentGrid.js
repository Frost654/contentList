import React, { useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import ContentItem from './ContentItem';
import { pageUrl } from './config/constants';

const ContentGrid = ({ searchTerm, items, setItems, filteredItems, setFilteredItems }) => {
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  // Function to load items from the API
  const loadItems = useCallback(async () => {
    setLoading(true);
    setError(false);

    try {
      const response = await axios.get(`${pageUrl}${page}.json`);
      const contentItems = response.data?.page['content-items'].content || [];
      setItems((prevItems) => [...prevItems, ...contentItems]);
    } catch (err) {
      console.error("Error fetching data:", err);
      setError(true);
    } finally {
      setLoading(false);
    }
  }, [page, setItems]);

  // Load items whenever the page number changes
  useEffect(() => {
    loadItems();
  }, [page, loadItems]);

  // Update filteredItems only when searchTerm or items change
  useEffect(() => {
    setFilteredItems(
      items.filter((item) =>
        item.name.toLowerCase().includes(searchTerm.toLowerCase())
      )
    );
  }, [searchTerm, items, setFilteredItems]);

  // Scroll event handler to detect when the user reaches the bottom of the page
  const handleScroll = useCallback(() => {
    if (
      window.innerHeight + document.documentElement.scrollTop + 1 >= document.documentElement.scrollHeight &&
      !loading && 
      !error
    ) {
      setPage((prevPage) => prevPage + 1);
    }
  }, [loading, error]);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  return (
    <>
      <div className="content-grid">
        {filteredItems.map((item, index) => (
          <ContentItem key={index} item={item} searchTerm={searchTerm} title={item.name} />
        ))}
      </div>
      {loading && <div className="loading-icon"></div>}
    </>
  );
};

export default ContentGrid;
