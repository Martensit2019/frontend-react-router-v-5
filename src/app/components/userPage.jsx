import React from 'react';
import { Link, useParams } from 'react-router-dom';

const UserPage = () => {
    const { userId } = useParams();

    return (
        <>
            <div>User Page</div>
            <Link to={`/users/${userId}/edit`}>Edit this user </Link>
            <Link to="/users">Users List Page</Link>
            <div>userId: {userId}</div>
        </>
    );
};

export default UserPage;
