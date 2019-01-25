import React, { Component } from 'react';
import { Link } from '@reach/router'

class Navbar extends Component {
    render() {
        return (
            <nav className="nav-wrapper">
                <div className="container">
                    <Link to="/">
                        <span>REACT | </span><label className="project-name">Sequencers</label>
                    </Link>
                </div>
            </nav>
        )
    }
}

export default Navbar;
