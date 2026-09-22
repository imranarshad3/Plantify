import { SlidersHorizontal, Search } from 'lucide-react';
import React from 'react';
import './Searchfilter.css';

function Searchfilter({
  searchTerm,
  onSearchChange,
  onSearchSubmit,
  onFilterClick,
  placeholder = "Search flowers..."
}) {
  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && onSearchSubmit) {
      onSearchSubmit(e);
    }
  };

  return (
    <section className="searchfilter-section">
      <div className="search-filter">
        <button className="filter" onClick={onFilterClick} type="button" aria-label="Open filters">
          <SlidersHorizontal size={32} />
        </button>

        <div className="search-bar">
          <input 
            type="text"
            value={searchTerm}
            onChange={(e) => onSearchChange(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder={placeholder} 
          />
        </div>

        <button className="search-icon" onClick={onSearchSubmit} type="button" aria-label="Submit search">
          <Search />
        </button>
      </div>
    </section>
  );
}

export default Searchfilter;
