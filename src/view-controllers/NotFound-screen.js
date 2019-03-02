import React from 'react';
import { Link } from 'react-router-dom';

function NotFoundScreen(props) {
    return (
        <section>
            <p><strong>Page Not Found {props.code && `(${props.code})`}</strong></p>
            <p>Go to <Link to="/">Home</Link></p>
        </section>
    )
}

export { NotFoundScreen }
