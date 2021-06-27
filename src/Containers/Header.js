import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div class="ui top fixed secondary menu">
            <Link to="/">
                <div class="item">
                <span className="logo-text">Mega Shop</span>
            </div>
            </Link>
            <nav className="nav-item">
                <a class="item">
                    Home
                </a>
                <a class="item">
                    Shop
                </a>
                <a class="item">
                    Categories
                </a>
                <a class="item">
                    Blog
                </a>
                <a class="item">
                    Contact
                </a>
            </nav>
            <div class="right menu">
                <div class="item">
                    <div class="ui icon input">
                        <input type="text" placeholder="Search..." />
                        <i class="search link icon"></i>
                    </div>
                </div>
                <a class="ui item">
                    Login
                </a>
            </div>
        </div>
    );
};

export default Header;