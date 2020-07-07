import React from 'react';
import { Link } from 'react-router-dom';
import './notfound.css';

export function NotFound() {

    return (
        <div id="not-found">
            <h1>404 Page Not Found</h1>
            <Link to="/">Back To Home</Link>
        </div >
    )
}

