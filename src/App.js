import React, { Component } from 'react';
import { Router } from '@reach/router';

import Navbar from './Layout/Navbar';
import Home from './Home';

import './styles/app.scss';

class App extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <Navbar />
                <div className="container">
                    <Router>
                        <Home path="/" />
                    </Router>
                </div>
            </div>
        );
    }
}

export default App;
