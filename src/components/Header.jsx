import React, { Component } from 'react'
import "../style/header.css";

export default class Header extends Component {
    render() {
        return (
          <header className="header">
            <h2 className="title">Weather Today?</h2>
            <form>
              <div className="search-container">
                <input placeholder="Search location..." className="input" />
                <button className="search-btn"></button>
              </div>
            </form>
          </header>
        );
    }
}
