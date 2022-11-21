import React from 'react';
import { Link } from 'react-router-dom';

const UsersListPage = () => {
    const users = [
        { id: 0, label: 'user 0' },
        { id: 1, label: 'user 1' },
        { id: 2, label: 'user 2' },
        { id: 3, label: 'user 3' },
        { id: 4, label: 'user 4' }
    ];
    return (
        <>
            <Link to="/">Main Page</Link>
            <div>Users List Page</div>
            <ul>
                {users.map((user) => (
                    <li key={user.id}>
                        <Link to={`users/${user.id}/profile`}>{user.label}</Link>
                    </li>
                ))}
            </ul>
        </>
    );
};

export default UsersListPage;
