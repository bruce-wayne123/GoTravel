import React from "react";
import UsersList from "../components/UsersList";
const Users = () => {
    const USERS = [{
        id: "u1",
        name: "Ethane",
        image: "https://i.pravatar.cc/150?img=12",
        places: 3
    }];
    return <UsersList items={USERS} />;
};

export default Users;