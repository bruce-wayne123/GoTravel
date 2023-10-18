import React from "react";
import "../styles/PlaceList.css";
import Card from '../../shared/components/UIElements/Card';
import Button from '../../shared/components/FormElements/Button';
import PlaceItem from "../components/PlaceItem";
const PlaceList = (props) => {
    if (props.items.length === 0) {
        return <div className="place-list center">
            <Card>
                <h2>No places found. Maybe create one?</h2>
            </Card>
            <Button to="/places/new">Share Place</Button>
        </div>
    }
    else {
        return (
            <ul className="place-list">
                {props.items.map((place) => {
                    return <PlaceItem
                        key={place.id}
                        id={place.id}
                        image={place.imageUrl}
                        title={place.title}
                        description={place.description}
                        address={place.address}
                        creatorId={place.creator}
                        coordinates={place.location}
                    />
                })}
            </ul>
        );
    }
};

export default PlaceList;