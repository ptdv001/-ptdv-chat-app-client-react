import React from 'react';
import { Link } from 'react-router-dom';

function HomeScreen(props) {
    return (
        <div>
            <br></br><br></br>

            <section className="chatHome-login">
                <p>Go to the chats! (actual Log In coming soon)</p>
                <Link to="/chats">Log In</Link>
            </section>
        </div>
    )
}

export { HomeScreen }
