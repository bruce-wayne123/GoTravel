import React from "react";
import "../styles/UserItem.css";
import { Link } from 'react-router-dom';
import Avatar from "../../shared/components/UIElements/Avatar";
import Card from "../../shared/components/UIElements/Card";
const UsersItem = (props) => {
    console.log(props, "Users Item component loaded");
    return (
        <li className="user-item">
            <Card className="user-item__content">
                <Link to={`/${props.id}/places`}>
                    <div className="user_item__image">
                        <Avatar image={props.image} alt={props.name} />
                    </div>
                    <div className="user_item__info">
                        <h2>{props.name}</h2>
                        <h3>{props.placeCount} {props.placeCount === 1 ? "Place" : "Places"}</h3>
                    </div>
                </Link>
            </Card>
        </li >

    )
};

export default UsersItem;