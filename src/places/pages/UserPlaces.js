import React from "react";
import PlaceList from "../components/PlaceList";
import { useParams } from "react-router-dom";

const DUMMY_PLACES =
    [
        {
            id: "p1",
            title: "Empire State Building",
            description: "One of the most famous sky scrapers in the world",
            imageUrl: "https://media.timeout.com/images/101705309/image.jpg",
            address: "20 W 34th St., New York, NY 10001, United States",
            location: {
                lat: 28.7041,
                lng: 77.1025
            },
            creator: "u1"
        },
        {
            id: "p2",
            title: "Burj Khalifa",
            description: "The Burj Khalifa is a skyscraper in Dubai, United Arab Emirates. It is the world's tallest building.",
            imageUrl: "https://lh5.googleusercontent.com/p/AF1QipNouThhC7edsvkTYfp_oDDFtfTLB9W5fdXOMxG-=w243-h244-n-k-no-nu",
            address: "1 Sheikh Mohammed bin Rashid Blvd - Downtown Dubai - Dubai - United Arab Emirates",
            location: {
                lat: 25.1972,
                lng: 55.2744
            },
            creator: "u2"
        }
    ];

const UserPlaces = () => {
    const userId = useParams().userId;
    const loadedPlaces = DUMMY_PLACES.filter(place => place.creator === userId);
    return <PlaceList items={loadedPlaces} />
};

export default UserPlaces;