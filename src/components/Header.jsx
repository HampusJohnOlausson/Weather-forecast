import React from 'react';
import '../Sass/header.scss';

const Header = (props) => {
  return (
    <div>
      <header className="header">
        <h2 className="title">Weather Today?</h2>
        <form onSubmit={(e) => props.changeWeather(e)}>
          <div className="search-container">
            <input
              placeholder="Search location..."
              className="input"
              onChange={(e) => props.changeLocation(e.target.value)}
            />
            <button className="search-btn">
              <i className="fas fa-search-location"></i>
            </button>
          </div>
        </form>
      </header>
    </div>
  );
}

export default Header

