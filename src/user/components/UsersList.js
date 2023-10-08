import React from "react";
import UserItem from "../components/UserItem";
import "../styles/UsersList.css";
import Card from "../../shared/components/UIElements/Card";
const UsersList = (props) => {
    if (props.items.length === 0) {
        return (<div className="center">
            <Card>
                <h2>No users found</h2>
            </Card>
        </div>);
    }
    else {
        return (
            <ul className="users-list">
                {props.items.map((user) => {
                    return <UserItem
                        key={user.id}
                        id={user.id}
                        name={user.name}
                        image={user.image}
                        placeCount={user.places} />
                })}
            </ul>)
    }
};

export default UsersList;