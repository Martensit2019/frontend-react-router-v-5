import React from 'react';
import { Link } from 'react-router-dom';

const MainPage = () => {
    return (
        <div>
            <Link to="/users">Users list page</Link>
            <div>Main Page</div>
        </div>
    );
};

export default MainPage;
