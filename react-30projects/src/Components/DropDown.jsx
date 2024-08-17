import React, { Component } from 'react';
import "../App.css";

export default class DropDown extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedApp: 'Select Social Media'
        };
    }

    selectApp = (appName) => {
        this.setState({ selectedApp: appName });
    }

    render() {
        const { selectedApp } = this.state;

        return (
            <div>
                <h1 style={{ color: 'green', textAlign: 'center' }}>Social Media</h1>
                
                <div className="dropdown" style={{ marginLeft: '500px', marginTop: '50px' }}>
                    <button className="dropbtn" id="sm">
                        {selectedApp}
                    </button>
                    <div className="dropdown-content">
                        <a href="#" onClick={() => this.selectApp('Facebook')}>Facebook</a>
                        <a href="#" onClick={() => this.selectApp('Twitter')}>Twitter</a>
                        <a href="#" onClick={() => this.selectApp('Instagram')}>Instagram</a>
                        <a href="#" onClick={() => this.selectApp('LinkedIn')}>LinkedIn</a>
                        <a href="#" onClick={() => this.selectApp('Snapchat')}>Snapchat</a>
                    </div>
                </div>
            </div>
        );
    }
}
