import React, { Component } from 'react'
import Header from './Header'
import Main from './Main'
import '../style/header.css';

export default class Layout extends Component {
    render() {
        return (
            <div>
               <Header className="header"/> 
               <Main/>
            </div>
        )
    }
}
