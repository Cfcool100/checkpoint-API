import React, { useState, useEffect } from "react";
import axios from "axios";

const UserList = () => {
    const [listOfUser, setlistOfUser] = useState([]);

    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/users")
        .then((res) => {
            const posts = res.data;
            setlistOfUser(posts);
        })
        .catch((err) => {
            console.error(err);
        });
    }, []);
    return (
        <table>
            <thead>
                <tr>
                    <th className="">Name</th>
                    <th className="">User Name</th>
                    <th className="">Email</th>
                </tr>
            </thead>
            <tbody>
                {listOfUser.map((user, index) => (
                    <tr key={user.id}>
                        <td className="data">{user.name}</td>
                        <td className="data">{user.username}</td>
                        <td className="data">{user.email}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default UserList;

//
