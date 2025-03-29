import React, { useState } from "react";
import Navbar from "./Navbar";
import "./Search.css";

const Search = () => {
  const [carDetails, setCarDetails] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [isSearching, setIsSearching] = useState(false);
  const [hasSearched, setHasSearched] = useState(false);

  const handleSearch = () => {
    if (!searchQuery.trim()) return;
    
    setIsSearching(true);
    setHasSearched(true);
    
    setTimeout(() => {
      console.log("Searching for:", searchQuery);
      const details = [
        {
          owner: "John Doe",
          model: "Renault Truck",
          number: "XYZ 1234",
          image: "https://www.vadoetornoweb.com/wp-content/uploads/2021/04/01.jpg",
        },
        {
          owner: "Jane Smith",
          model: "Toyota Truck",
          number: "ABC 5678",
          image: "https://th.bing.com/th/id/R.b30e20093b00355efbedb23b8330faaf?rik=1dVSrWJeUrM9Gw&riu=http%3a%2f%2fstatic2.businessinsider.com%2fimage%2f58f8e0fd7522cafa078b4cd6-2400&ehk=F9RW%2bX%2fjWpDerdXqiTso6ZyWlpDpiSM%2bpkrJBIjo%2by8%3d&risl=&pid=ImgRaw&r=0",
        },
      ];
      
      const filteredDetails = details.filter(
        (car) =>
          car.number.toLowerCase().includes(searchQuery.toLowerCase()) ||
          car.model.toLowerCase().includes(searchQuery.toLowerCase()) ||
          car.owner.toLowerCase().includes(searchQuery.toLowerCase())
      );
      
      setCarDetails(filteredDetails);
      setIsSearching(false);
    }, 500);
  };

  return (
    <div className="google-search-container">
      <Navbar />
      
      <div className={`search-area ${hasSearched ? 'with-results' : 'centered'}`}>
        <div className="search-branding">
          <h1>Fleet<span>Search</span></h1>
        </div>
        
        <div className="google-search-box-container">
          <div className="google-search-box">
            <i className="fas fa-search search-icon"></i>
            <input
              type="text"
              className="google-search-input"
              placeholder="Search for vehicles..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onKeyPress={(e) => e.key === "Enter" && handleSearch()}
            />
            {searchQuery && (
              <i 
                className="fas fa-times clear-icon" 
                onClick={() => setSearchQuery('')}
              ></i>
            )}
          </div>
          <div className="search-buttons">
            <button 
              className="google-search-button"
              onClick={handleSearch}
            >
              Search
            </button>
          </div>
        </div>
      </div>
      
      {hasSearched && (
        <div className="search-results">
          {isSearching ? (
            <div className="loading-state">
              <div className="spinner"></div>
              <p>Searching...</p>
            </div>
          ) : carDetails.length > 0 ? (
            <div className="results-grid">
              {carDetails.map((car, index) => (
                <div className="result-card" key={index}>
                  <div className="card-image">
                    <img src={car.image} alt={car.model} />
                  </div>
                  <div className="card-content">
                    <h3>{car.model}</h3>
                    <p><strong>Owner:</strong> {car.owner}</p>
                    <p><strong>Number:</strong> {car.number}</p>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="no-results">
              <p>No vehicles found matching "{searchQuery}"</p>
              <p>Try checking your spelling or using more general terms</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Search;