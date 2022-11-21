import React from 'react';
import { Link, useParams } from 'react-router-dom';

const EditUserPage = () => {
    const { userId } = useParams();
    return (
        <>
            Edit User Page
            <Link to={`/users/${userId}/profile`}>User Profile page</Link>
            <Link to={`/users/${Number(userId) + 1}/profile`}>Another User</Link>
            <Link to={'/users'}>Users List page</Link>
        </>
    );
};

export default EditUserPage;
