import React, { Component } from 'react';
import Header from './Header.js';

class Layout extends Component {
    render() {
        return (
            <div>
                <Header></Header>
                <div className="container main-container">
                    {this.props.children}
                </div>
            </div>
        );
    }
}

export default Layout;
