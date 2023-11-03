import React, { useState, useEffect } from 'react';

const FetchData = () => {
    const [users, setUsers] = useState([]);

    function fetchUsers() {
        const fetchUserData = fetch('https://dummyjson.com/users');

        fetchUserData
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                console.log(data.users);
                setUsers(data.users);
            })
            .catch((error) => {
                console.log(error);
            });
    }

    useEffect(() => {
        fetchUsers();
    }, []);

    return (
        <>
            {users.map((item) => {
                return  <li key={item.id}>{item.firstName}</li>;
            })}
        </>
    );
};

export default FetchData;
